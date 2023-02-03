import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/notices';

const getAll = createAsyncThunk('notices/getAll', async (category, thunkApi) => {
    try {
        const result = await api.getAll(category);
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.message);
    }
})