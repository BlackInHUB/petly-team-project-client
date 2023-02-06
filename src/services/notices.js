import axios from "axios";

const instance = axios.create({
    baseURL: 'https://petly.onrender.com/api/notices'
    // baseURL: 'http://localhost:8080/api/notices'
});

export const add = async (notice) => {
    return await instance.post('/', notice)
};

export const getAll = async (category, filter) => {
    return await instance.get(`/${category}?filter=${filter}`);
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
