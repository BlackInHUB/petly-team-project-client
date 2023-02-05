import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/notices';

const getAll = createAsyncThunk('notices/getAll', async (category, thunkApi) => {
    try {
        const {data} = await api.getAll(category);
        return data;
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getOne = createAsyncThunk('notices/getOne', async (id, thunkApi) => {
    try {
        const result = await api.getOne(id);
        return result;

    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getOwn = createAsyncThunk('notices/getOwn', async (_, thunkApi) => {
    try {
        const result = await api.getOwn();
        return result;
        
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const getFavorites = createAsyncThunk('notices/getFavorites', async (_, thunkApi) => {
    try {
        const result = await api.getFavorites();
        return result;

    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.message);
    };
});

const noticesOperations = {
    getAll,
    getOne,
    getOwn,
    getFavorites
};

export default noticesOperations;