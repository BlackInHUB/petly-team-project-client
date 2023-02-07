import { createSlice } from "@reduxjs/toolkit";
import getNews from "./news-operations";
import fetchNews from "../../../services/news/fetchNews";
const initiaData = fetchNews();
console.log(initiaData)

    const initialState = {
        news: [],
        loading: false,
        error: null,
    }

    const newsSlice = createSlice({
      name: 'news',
      initialState,
      extraReducers: {
        [getNews.pending]: store => {
          store.loading = true;
          store.error = null;
        },
        [getNews.fulfilled]: (store, { payload }) => {
          store.loading = false;
          store.news = payload;
        },
        [getNews.rejected]: (store, { payload }) => {
          store.loading = false;
          store.error = payload;
        },
    },

});

export default newsSlice.reducer;