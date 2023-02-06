import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setFilter = createAsyncThunk('newsFilter', async (value, thunkApi) => {
    return value;
});

const initialState = {
    newsFilter: ''
};

const newsFilterSlice = createSlice({
    name: 'newsFilter',
    initialState,
    extraReducers: (builder) => {
        builder
    .addCase(setFilter.fulfilled, (state, {payload}) => {
        state.filter = payload;
    })
    }
});

export default newsFilterSlice.reducer;