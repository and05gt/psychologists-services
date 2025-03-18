import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, query, orderByKey, limitToFirst, get } from 'firebase/database';
import { database } from '../../firebase.js';

export const fetchPsychologists = createAsyncThunk(
  'psychologists/fetchPsychologists',
  async ({ pageSize = 3 }, thunkAPI) => {
    try {
      const psychologistsRef = ref(database, 'psychologists');
      const dbQuery = query(
        psychologistsRef,
        orderByKey(),
        limitToFirst(pageSize),
      );
      const snapshot = await get(dbQuery);

      if (!snapshot.exists()) {
        return thunkAPI.rejectWithValue('No psychologists found');
      }

      const rawData = snapshot.val();
      const psychologistsArray = Object.entries(rawData).map(
        ([uid, psychologistData]) => ({
          uid,
          ...psychologistData,
        }),
      );

      return psychologistsArray;
    } catch (error) {
      if (error.code === 'PERMISSION_DENIED') {
        return thunkAPI.rejectWithValue(
          'Insufficient permissions to access data.',
        );
      } else if (error.code === 'NOT_FOUND') {
        return thunkAPI.rejectWithValue('Psychologists data not found.');
      } else {
        return thunkAPI.rejectWithValue(
          `An unexpected error occurred: ${error.message}`,
        );
      }
    }
  },
);
