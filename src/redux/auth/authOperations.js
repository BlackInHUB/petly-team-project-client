import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/auth';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly.onrender.com';

const eraseErrors = createAsyncThunk('auth/eraseErrors', () => {});

const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const result = await api.register(user);

    if (result._id) {
      const { email, password } = user;
      return await api.login({ email, password });
    }
  } catch (error) {
    let message = '';
    if (error.response.status === 409)
      message =
        'User with the same email already registrated, we can send password on your email';
    if (error.response.status === 401) message = 'Data is wrong';
    if (error.response.status === 500)
      message = 'BackEnd dead, please try later';
    return thunkAPI.rejectWithValue(message);
  }
});

const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await api.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue('Wrong password or email');
  }
});

const update = createAsyncThunk('auth/update', async (updateData, thunkAPI) => {
  try {
    const result = await api.update(updateData);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  try {
    return await api.refresh(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const authOperations = {
  register,
  login,
  logout,
  refresh,
  update,
  eraseErrors,
};

export default authOperations;
