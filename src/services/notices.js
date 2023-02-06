import axios from "axios";

const instance = axios.create({
    baseURL: 'https://petly.onrender.com/api/notices'
});

export const getAll = async ({category, filter}) => {
    return await instance.get(`/${category}`, filter);
};

export const getOne = async (id) => {
    return await instance.get(`/details/${id}`);
};

export const remove = async (id) => {
    return await instance.delete(`/${id}`);
};

export const getOwn = async () => {
    return await instance.get('/user/own');
};

export const getFavorites = async () => {
    return await instance.get('/user/favorites');
};
