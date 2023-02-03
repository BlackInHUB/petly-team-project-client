import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    city: null,
    birthday: null,
    phone: null,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  isError: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.eraseErrors.fulfilled, (state, _) => {
        state.isError = null;
      })
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.isError = null;
      })
      .addCase(authOperations.register.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
        state.isError = payload;
      })
      .addCase(authOperations.login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.isError = null;
      })
      .addCase(authOperations.login.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
        state.isError = payload;
      })
      .addCase(authOperations.fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.token = initialState.token;
        state.isError = null;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, state => {
        state.isRefreshing = initialState.isRefreshing;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = initialState.isRefreshing;
          state.isError = null;
        }
      );
  },
});

export default authSlice.reducer;
