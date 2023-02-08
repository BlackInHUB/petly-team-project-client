import { get } from "services/news";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk ('news/get', async (_, thunkApi) => {
    try {
        const {data} = await get();
        return data
    } catch ({response}) {
        return thunkApi.rejectWithValue(response.data.message)
    };
});

const initialState = {
    news: [],
    isLoading: false,
    isError: null
};

const newsSlice = createSlice({
    name: 'news/get',
    initialState,
    extraReducers: (builder) => {
        builder
    .addCase(getNews.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(getNews.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.news = payload;
    })
    .addCase(getNews.rejected, (state, {payload}) => {
        state.isError = payload;
        state.isLoading = false
    })
    }
})

export default newsSlice.reducer;