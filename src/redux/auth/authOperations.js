import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const { data } = await axios.post('/api/auth/register', credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('wrong password or email');
    return thunkAPI.rejectWithValue('wrong password or email');
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
    return;
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('something goes wrong');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/user/current');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something goes wrong');
    }
  }
);

const update = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
  try {
    console.log('credentialsUp', credentials);
    const { data } = await axios.patch('/api/auth/update', credentials);
    console.log('dataUp', data);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
  update,
};

export default authOperations;
