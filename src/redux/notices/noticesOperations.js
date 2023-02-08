import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/notices';

const add = createAsyncThunk('notices/add', async (notice, thunkApi) => {
    try {
        const {data} = await api.add(notice);
        return data;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
}) 

const getAll = createAsyncThunk('notices/getAll', async (category, thunkApi) => {
    console.log('getAll')
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
        const {data} = await api.getOwn();
        return data;
        
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const getFavorites = createAsyncThunk('notices/getFavorites', async (_, thunkApi) => {
    try {
        const {data} = await api.getFavorites();
        return data;

    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const remove = createAsyncThunk('notices/remove', async (id, thunkApi) => {
    try {
        await api.remove(id);
        return id;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
})

const noticesOperations = {
    getAll,
    getOne,
    getOwn,
    getFavorites,
    add,
    remove
};

export default noticesOperations;