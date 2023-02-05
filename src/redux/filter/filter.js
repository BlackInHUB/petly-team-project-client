import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setFilter = createAsyncThunk('notices/setFilter', async (value, thunkApi) => {
    return value;
});

const initialState = {
    filter: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    extraReducers: (builder) => {
        builder
    .addCase(setFilter.fulfilled, (state, {payload}) => {
        state.filter = payload;
    })
    }
});

export default filterSlice.reducer;