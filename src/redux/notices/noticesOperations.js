import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix/build/notiflix-notify-aio';
import * as api from '../../services/notices';

Notiflix.Notify.init({ position: 'left-bottom' });

const add = createAsyncThunk('notices/add', async (notice, thunkApi) => {
  try {
    const { data } = await api.add(notice);
    Notiflix.Notify.success('ad successfully created', {
      timeout: 3000,
    });
    return data;
  } catch ({ result }) {
    Notiflix.Notify.failure(`something goe wrong ${result.data.message}`, {
      timeout: 3000,
    });
    return thunkApi.rejectWithValue(result.data.message);
  }
});

const getAll = createAsyncThunk(
  'notices/getAll',
  async (category, thunkApi) => {
    try {
      const { filter } = thunkApi.getState().filter;
      const { data } = await api.getAll(category, filter);
      return data;
    } catch ({ result }) {
      return thunkApi.rejectWithValue(result.data.message);
    }
  }
);

const getOne = createAsyncThunk('notices/getOne', async (id, thunkApi) => {
  try {
    const result = await api.getOne(id);
    return result;
  } catch ({ result }) {
    return thunkApi.rejectWithValue(result.data.message);
  }
});

const getOwn = createAsyncThunk('notices/getOwn', async (_, thunkApi) => {
  try {
    const { data } = await api.getOwn();
    console.log(data)
    return data;
  } catch ({ result }) {
    return thunkApi.rejectWithValue(result.data.message);
  }
});

const getFavorites = createAsyncThunk(
  'notices/getFavorites',
  async (_, thunkApi) => {
    try {
      const { data } = await api.getFavorites();
      console.log(data)
      return data;
    } catch ({ result }) {
      return thunkApi.rejectWithValue(result.data.message);
    }
  }
);

const remove = createAsyncThunk('notices/remove', async (id, thunkApi) => {
  try {
    await api.remove(id);
    return id;
  } catch ({ result }) {
    return thunkApi.rejectWithValue(result.data.message);
  }
});

const setCategory = createAsyncThunk(
  'notice/category',
  async (category, thunkApi) => {
    return category;
  }
);

const update = createAsyncThunk('notices/update', async (data, thunkApi) => {
  const {_id, updateData} = data;

  try {
    const result = await api.update(_id, updateData);
    return result;
  } catch ({ result }) {
    return thunkApi.rejectWithValue(result.data.message);
  }
});

const noticesOperations = {
  getAll,
  getOne,
  getOwn,
  getFavorites,
  add,
  remove,
  setCategory,
  update
};

export default noticesOperations;
