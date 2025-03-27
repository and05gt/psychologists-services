import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  query,
  orderByChild,
  limitToFirst,
  limitToLast,
  get,
  startAfter,
  endBefore,
} from 'firebase/database';
import { database } from '../../firebase.js';

const psychologistsRef = ref(database, '/psychologists');

export const getPsychologistsFromAtoZ = createAsyncThunk(
  'psychologists/getPsychologistsFromAtoZ',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('name'),
          startAfter(condition),
          limitToFirst(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const sortedPsychologists = psychologistsArray.sort((a, b) =>
          a.name.localeCompare(b.name),
        );

        const hasNextPage = sortedPsychologists.length === 3;

        return { psychologists: sortedPsychologists, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
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

export const getPsychologistsFromZtoA = createAsyncThunk(
  'psychologists/getPsychologistsFromZtoA',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('name'),
          endBefore(condition ? condition : 'Y'),
          limitToLast(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const sortedPsychologists = psychologistsArray.sort((a, b) =>
          b.name.localeCompare(a.name),
        );

        const hasNextPage = sortedPsychologists.length === 3;

        return { psychologists: sortedPsychologists, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
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

export const getPsychologistsLess10 = createAsyncThunk(
  'psychologists/getPsychologistsLess10',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('price_per_hour'),
          endBefore(condition ? condition : 10),
          limitToFirst(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const hasNextPage = psychologistsArray.length === 3;

        return { psychologists: psychologistsArray, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
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

export const getPsychologistsGreater10 = createAsyncThunk(
  'psychologists/getPsychologistsGreater10',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('price_per_hour'),
          startAfter(condition ? condition : 10),
          limitToFirst(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const hasNextPage = psychologistsArray.length === 3;

        return { psychologists: psychologistsArray, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
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

export const getPsychologistsPopular = createAsyncThunk(
  'psychologists/getPsychologistsPopular',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('rating'),
          startAfter(condition ? condition : 0),
          limitToLast(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const sortedPsychologists = psychologistsArray.sort(
          (a, b) => b.rating - a.rating,
        );

        const hasNextPage = sortedPsychologists.length === 3;

        return { psychologists: sortedPsychologists, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
      }
    } catch (error) {
      if (error.code === 'PERMISSION_DENIED') {
        return thunkAPI.rejectWithValue(
          'Insufficient permissions to access data.',
        );
      } else if (error.code === 'NOT_FOUND') {
        return thunkAPI.rejectWithValue('Psychologists data not found.');
      } else {
        console.error('Error fetching psychologists by rating:', error);
        return thunkAPI.rejectWithValue(
          `An unexpected error occurred: ${error.message}`,
        );
      }
    }
  },
);

export const getPsychologistsNotPopular = createAsyncThunk(
  'psychologists/getPsychologistsNotPopular',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          psychologistsRef,
          orderByChild('rating'),
          startAfter(condition ? condition : 1.0),
          limitToFirst(3),
        ),
      );

      if (snapshot.exists()) {
        const rawData = snapshot.val();

        const psychologistsArray = Object.keys(rawData).map((item) => {
          return { id: item, ...rawData[item] };
        });

        const hasNextPage = psychologistsArray.length === 3;

        return { psychologists: psychologistsArray, hasNextPage };
      } else {
        return { psychologists: [], hasNextPage: false };
      }
    } catch (error) {
      if (error.code === 'PERMISSION_DENIED') {
        return thunkAPI.rejectWithValue(
          'Insufficient permissions to access data.',
        );
      } else if (error.code === 'NOT_FOUND') {
        return thunkAPI.rejectWithValue('Psychologists data not found.');
      } else {
        console.error('Error fetching psychologists by rating:', error);
        return thunkAPI.rejectWithValue(
          `An unexpected error occurred: ${error.message}`,
        );
      }
    }
  },
);
