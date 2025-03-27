import { createSlice } from '@reduxjs/toolkit';
import { getPsychologists } from './operations.js';

const initialState = {
  psychologists: [],
  sortType: 'A to Z',
  favorites: [],
  isLoading: false,
  error: null,
  lastKey: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    getSortType: (state, action) => {
      state.sortType = action.payload;
    },
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id,
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
      .addCase(getPsychologists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;

        if (!action.meta.arg.startKey) {
          state.psychologists = action.payload.psychologists;
        } else {
          const newPsychologists = [
            ...state.psychologists,
            ...action.payload.psychologists,
          ];
          state.psychologists = newPsychologists.filter(
            (psychologist, index, self) =>
              index === self.findIndex((item) => item.id === psychologist.id),
          );
        }
        state.lastKey = action.payload.lastKey;
      })
      .addCase(getPsychologists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { getSortType, toggleFavorite } = psychologistsSlice.actions;

export const psychologistsReducer = psychologistsSlice.reducer;
