import { instance } from "./auth";

export const newMessage = async (message, recipientId) => {
    return await instance.post(`/messages/${recipientId}`, message);
};

export const get = async () => {
    return await instance.get('/messages')
};

export const readed = async (messageId) => {
    return await instance.get(`/messages/readed/${messageId}`);
};

export const remove = async (messageId) => {
    return await instance.get(`/messages/remove/${messageId}`);
};