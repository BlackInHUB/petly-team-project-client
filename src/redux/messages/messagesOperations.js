import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/messages';

const newMessage = createAsyncThunk('messages/new', async(data, thunkApi) => {
    const {message, _id} = data;
    try {
        const {data} = await api.newMessage(message, _id)
        return data;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const get = createAsyncThunk('messages/get', async(_, thunkApi) => {
    const {isLoggedIn} = thunkApi.getState().auth;
    if(!isLoggedIn) {
        return
    };
    try {
        const {data} = await api.get();
        return data.messages;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const readed = createAsyncThunk('messages/readed', async(messageId, thunkApi) => {
    try {
        const {data} = await api.readed(messageId);
        return data;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const remove = createAsyncThunk('messages/remove', async(messageId, thunkApi) => {
    try {
        await api.remove(messageId);
        return messageId;
    } catch ({result}) {
        return thunkApi.rejectWithValue(result.data.message)
    }
});

const messagesOperations = {
    newMessage,
    get,
    readed,
    remove
};

export default messagesOperations;