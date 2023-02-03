import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/auth';

const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const result = await api.register(user);
    
    if (result._id) {
      const {email, password} = user;
      return await api.login({email, password})
    }
  } catch (error) {
    console.log(error)
    // const error = {
    //   status: response.status,
    //   message: response.data.message
    // } 
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await api.login(user);
  } catch (error) {
    console.log(error)
    // const error = {
    //   status: response.status,
    //   message: response.data.message
    // } 
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.logout();
    return;
  } catch (error) {
    console.log(error)
    // const error = {
    //   status: response.status,
    //   message: response.data.message
    // } 
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const {token} = thunkAPI.getState().auth;
    try {
      return await api.refresh(token);
    } catch (error) {
      console.log(error)
      // const error = {
      //   status: response.status,
      //   message: response.data.message
      // } 
      return thunkAPI.rejectWithValue(error.response.message);
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
