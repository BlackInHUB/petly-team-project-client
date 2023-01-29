import { createSlice } from '@reduxjs/toolkit';
import { current } from './authOperations';

const initialState = {
  isLoggedIn: false,
  isLoadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload;
      store.isLoggedIn = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
