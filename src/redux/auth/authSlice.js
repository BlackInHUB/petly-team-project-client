import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    city: null,
    birthday: null,
    phone: null,
    avatarUrl: null,
  },
  pets: [],
  favorites: [],
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isError: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(authOperations.register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.login.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.pets = payload.pets;
        state.token = payload.token;
        state.isError = null;
      })
      .addCase(authOperations.login.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
        state.isError = payload;
      })
      .addCase(authOperations.refresh.pending, state => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(authOperations.refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pets = payload.pets;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isError = null;
      })
      .addCase(authOperations.refresh.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        //state.isError = payload;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.token = initialState.token;
        state.isError = null;
      })
      .addCase(authOperations.eraseErrors.fulfilled, (state, _) => {
        state.isError = null;
      });
  },
});

export default authSlice.reducer;
