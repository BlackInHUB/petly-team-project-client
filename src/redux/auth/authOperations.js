import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/auth';

const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await api.register(user);
  } catch ({response}) {
    const error = {
      status: response.status,
      message: response.data.message
    } 
    return thunkAPI.rejectWithValue(error);
  }
});

const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await api.login(user);
  } catch ({response}) {
    const error = {
      status: response.status,
      message: response.data.message
    } 
    return thunkAPI.rejectWithValue(error);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout();
    return;
  } catch ({response}) {
    const error = {
      status: response.status,
      message: response.data.message
    } 
    return thunkAPI.rejectWithValue(error);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().auth;
    try {
      return await api.refresh(token);
    } catch ({response}) {
      const error = {
        status: response.status,
        message: response.data.message
      } 
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authOperations = {
  register,
  login,
  logout,
  refresh
};

export default authOperations;
