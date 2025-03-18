import { createSlice } from '@reduxjs/toolkit';
import { fetchPsychologists } from './operations.js';

const initialState = {
  psychologists: [],
  favorites: [],
  loading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.uid === action.payload.uid,
      );

      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.loading = false;
        state.psychologists = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = psychologistsSlice.actions;

export const psychologistsReducer = psychologistsSlice.reducer;
