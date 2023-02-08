import { instance } from "./auth";

export const get = async () => {
    return await instance.get('/news');
};