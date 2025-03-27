import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase.js';

const psychologistsRef = ref(database, '/psychologists');

export const getPsychologists = createAsyncThunk(
  'psychologists/getPsychologists',
  async (params, thunkAPI) => {
    try {
      const { startKey, sortType } = params;
      const snapshot = await get(psychologistsRef);

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        let psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        switch (sortType) {
          case 'A to Z':
            psychologistsArray.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'Z to A':
            psychologistsArray.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case 'Less than 10$':
            psychologistsArray.sort(
              (a, b) => a.price_per_hour - b.price_per_hour,
            );
            psychologistsArray = psychologistsArray.filter(
              (item) => item.price_per_hour < 10,
            );
            break;
          case 'Greater than 10$':
            psychologistsArray.sort(
              (a, b) => b.price_per_hour - a.price_per_hour,
            );
            psychologistsArray = psychologistsArray.filter(
              (item) => item.price_per_hour >= 10,
            );
            break;
          case 'Popular':
            psychologistsArray.sort((a, b) => b.rating - a.rating);
            break;
          case 'Not popular':
            psychologistsArray.sort((a, b) => a.rating - b.rating);
            break;
          case 'Show all':
          default:
            break;
        }

        const pageSize = 3;
        let startIndex = 0;
        if (startKey) {
          const index = psychologistsArray.findIndex(
            (psychologist) => psychologist.id === startKey,
          );
          startIndex = index !== -1 ? index + 1 : 0;
        }

        const psychologists = psychologistsArray.slice(
          startIndex,
          startIndex + pageSize,
        );

        const newLastKey =
          psychologists.length > 0
            ? psychologists[psychologists.length - 1].id
            : null;

        return {
          psychologists,
          lastKey: newLastKey,
        };
      } else {
        return { psychologists: [], lastKey: null };
      }
    } catch (error) {
      if (error.code === 'PERMISSION_DENIED') {
        return thunkAPI.rejectWithValue(
          'Insufficient permissions to access data.',
        );
      } else if (error.code === 'NOT_FOUND') {
        return thunkAPI.rejectWithValue('Psychologists data not found.');
      } else {
        console.error('Unexpected error:', error);
        return thunkAPI.rejectWithValue(
          `An unexpected error occurred: ${error.message}`,
        );
      }
    }
  },
);
