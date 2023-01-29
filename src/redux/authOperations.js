import { createAsyncThunk } from '@reduxjs/toolkit';

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    // Reading the token from the state via getState()
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return rejectWithValue('Unable to fetch user');
    } 
  }
);
