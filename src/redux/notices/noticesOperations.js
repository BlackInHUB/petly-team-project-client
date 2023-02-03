import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/notices';

const getAll = createAsyncThunk('notices/getAll', async (category, thunkApi) => {
    try {
        const result = await api.getAll(category);
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getOne = createAsyncThunk('notices/getOne', async (id, thunkApi) => {
    try {
        const result = await api.getOne(id);

    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getOwn = createAsyncThunk('notices/getOwn', async (_, thunkApi) => {
    try {
        const result = await api.getOwn();
        
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getFavorites = createAsyncThunk('notices/getFavorites', async (_, thunkApi) => {
    try {
        const result = await api.getFavorites();

    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
})