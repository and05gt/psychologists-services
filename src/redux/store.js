import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { psychologistsReducer } from './psychologists/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistConfigFavorites = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    psychologists: persistReducer(persistConfigFavorites, psychologistsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
