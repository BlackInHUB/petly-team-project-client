import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/notices';

const add = createAsyncThunk('notices/add', async (notice, thunkApi) => {
    console.log(notice)
    try {
        const {data} = await api.add(notice);
        return data;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
}) 

const getAll = createAsyncThunk('notices/getAll', async (category, thunkApi) => {
    try {
        const {filter} = thunkApi.getState().filter;
        const {data} = await api.getAll(category, filter);
        return data;
        
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const getOne = createAsyncThunk('notices/getOne', async (id, thunkApi) => {
    try {
        const result = await api.getOne(id);
        return result;

    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const getOwn = createAsyncThunk('notices/getOwn', async (_, thunkApi) => {
    try {
        const result = await api.getOwn();
        return result;
        
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const getFavorites = createAsyncThunk('notices/getFavorites', async (_, thunkApi) => {
    try {
        const result = await api.getFavorites();
        return result;

    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const noticesOperations = {
    getAll,
    getOne,
    getOwn,
    getFavorites,
    add
};

export default noticesOperations;