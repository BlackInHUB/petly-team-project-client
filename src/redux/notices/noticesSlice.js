import { createSlice } from "@reduxjs/toolkit";
import noticesOperations from "./noticesOperations";

const initialState = {
    allNotices: [],
    favorites: [],
    own: [],
    details: null,
    isLoading: false,
    isError: null,
    userCategory: null
}

const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    extraReducers: (builder) => {
        builder
    .addCase(noticesOperations.add.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.add.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.allNotices = state.category === payload.notice.category 
        ? [payload.notice, ...state.allNotices] 
        : state.allNotices;
        state.own = [payload.notice, ...state.own];
    })
    .addCase(noticesOperations.add.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.getAll.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.getAll.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.allNotices = payload;
    })
    .addCase(noticesOperations.getAll.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.getOne.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.getOne.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.details = payload;
    })
    .addCase(noticesOperations.getOne.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.getOwn.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.getOwn.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.own = payload;
    })
    .addCase(noticesOperations.getOwn.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.getFavorites.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.getFavorites.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.favorites = payload.favorites;
    })
    .addCase(noticesOperations.getFavorites.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.remove.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.remove.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.allNotices = state.allNotices.filter(notice => notice._id !== payload);
        state.own = state.own.filter(notice => notice._id !== payload);
    })
    .addCase(noticesOperations.remove.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(noticesOperations.setCategory.fulfilled, (state, {payload}) => {
        state.category = payload;
    })
    .addCase(noticesOperations.update.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(noticesOperations.update.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.allNotices = state.allNotices.map(notice => {
            if(notice._id === payload._id) {
                return payload;
            };
            return notice;
        });
        state.own = state.own.filter(notice => notice._id !== payload);
    })
    .addCase(noticesOperations.update.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    }
});

export default noticesSlice.reducer;