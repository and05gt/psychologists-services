import { createSlice } from '@reduxjs/toolkit';
import {
  getPsychologistsFromAtoZ,
  getPsychologistsFromZtoA,
  getPsychologistsLess10,
  getPsychologistsGreater10,
  getPsychologistsPopular,
  getPsychologistsNotPopular,
} from './operations.js';

const initialState = {
  psychologists: [],
  sortQuery: '',
  sortType: 'A to Z',
  favorites: [],
  hasNextPage: true,
  isLoading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {
    getNextRequest: (state, action) => {
      state.sortQuery = action.payload;
    },
    getSortType: (state, action) => {
      state.sortType = action.payload;
      state.sortQuery = '';
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
      .addCase(getPsychologistsFromAtoZ.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsFromAtoZ.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsFromAtoZ.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPsychologistsFromZtoA.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsFromZtoA.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsFromZtoA.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPsychologistsLess10.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsLess10.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsLess10.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPsychologistsGreater10.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsGreater10.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsGreater10.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPsychologistsPopular.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPsychologistsNotPopular.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsNotPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologists.push(...action.payload.psychologists);
        } else {
          state.psychologists = action.payload.psychologists;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsNotPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { getNextRequest, getSortType, toggleFavorite } =
  psychologistsSlice.actions;

export const psychologistsReducer = psychologistsSlice.reducer;
