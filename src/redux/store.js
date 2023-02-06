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
import {default as newsFilterReducer} from './news/newsFilter';


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

const persistNewsFiltersConfig = {
  key: 'newsFilter',
  storage,
  whitelist: ['newsFilter'],
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedFilterReducer = persistReducer(persistFiltersConfig, filterReducer);
const persistedNewsFiltersReducer = persistReducer(persistNewsFiltersConfig, newsFilterReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    notices: noticesReducer,
    filter: persistedFilterReducer,
    newsFilter: persistedNewsFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
