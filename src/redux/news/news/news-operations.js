import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchNews from "../../../services/news/fetchNews";

const getNews = createAsyncThunk('news', async (_,thunkApi) => {
    try {
        const data = await fetchNews();
        return data;
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});

export default getNews;