import { createSlice } from "@reduxjs/toolkit";
import messagesOperations from "./messagesOperations";

const initialState = {
    messages: [],
    isLoading: false,
    isError: null
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: (builder) => {
        builder
    .addCase(messagesOperations.newMessage.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(messagesOperations.newMessage.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.messages = [payload, ...state.messages];
    })
    .addCase(messagesOperations.newMessage.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(messagesOperations.get.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(messagesOperations.get.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.messages = payload;
    })
    .addCase(messagesOperations.get.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(messagesOperations.readed.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(messagesOperations.readed.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.messages = state.messages.map(message => {
            if(message._id === payload._id) {
                message.readed = true;
                return message
            };
            return message;
        });
    })
    .addCase(messagesOperations.readed.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    .addCase(messagesOperations.remove.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
    })
    .addCase(messagesOperations.remove.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = null;
        state.messages = state.messages.filter(message => message._id !== payload);
    })
    .addCase(messagesOperations.remove.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = payload;
    })
    }
});

export default messagesSlice.reducer;