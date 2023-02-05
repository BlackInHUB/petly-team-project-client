import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { noticesReducer } from './notices';
import { default as filterReducer } from './filter/filter';


const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistFiltersConfig = {
  key: 'filter',
  storage,
  whitelist: ['filter'],
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedFilterReducer = persistReducer(persistFiltersConfig, filterReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    notices: noticesReducer,
    filter: persistedFilterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
