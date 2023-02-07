import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchNews from "../../../services/news/fetchNews";

export const getNews = createAsyncThunk('news', async (_,thunkApi) => {
    try {
        const data = await fetchNews();
        console.log(data)
        return data;
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});

export default getNews; 