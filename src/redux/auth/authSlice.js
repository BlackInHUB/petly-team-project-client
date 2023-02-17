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
    favorites: [],
    messages: []
  },
  pets: [],
  users: [],
  profile: null,
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
      .addCase(authOperations.update.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.update.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user[Object.keys(payload.user)[0]] = Object.values(
          payload.user
        )[0];
        state.isError = null;
      })
      .addCase(authOperations.update.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.refresh.pending, state => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(authOperations.refresh.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state = initialState
        };
        state.user = payload.user;
        state.pets = payload.pets;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isError = null;
      })
      .addCase(authOperations.refresh.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.pets = initialState.pets;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.token = initialState.token;
        state.isError = null;
      })
      .addCase(authOperations.eraseErrors.fulfilled, (state, _) => {
        state.isError = null;
      })
      .addCase(authOperations.favorites.pending, (state, _) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.favorites.fulfilled, (state, { payload }) => {
        state.user.favorites = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.favorites.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(authOperations.profile.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.profile.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.profile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.getUsers.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.addPet.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.addPet.fulfilled, (state, { payload }) => {
        state.pets = [payload, ...state.pets];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.addPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.removePet.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.removePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.filter(pet => pet._id !== payload._id);
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.removePet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(authOperations.updatePet.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authOperations.updatePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.map(pet => {
          if(pet._id === payload._id) {
            return payload;
          };
          return pet;
        })
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(authOperations.updatePet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
  },
});

export default authSlice.reducer;
