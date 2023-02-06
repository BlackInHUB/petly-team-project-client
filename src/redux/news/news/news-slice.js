import { createSlice } from "@reduxjs/toolkit";
import getNews from "./news-operations";

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
      store.items = payload;
    },
    [getNews.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },

});

export default newsSlice.reducer;