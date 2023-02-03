import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

const setToken = (token) => {
    if (token) {
        return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async (user) => {
    const {data} = await instance.post('/auth/register', user);
    setToken(data.token);
    return data.user;
}

export const login = async (user) => {
    const {data} = await instance.post('/auth/login', user);
    setToken(data.token);
    return data;
};

export const logout = async () => {
    const {data} = await instance.get('/auth/logout');
    setToken();
    return data;
};

export const refresh = async (token) => {
    try {
        setToken(token);
        const {data} = await instance.get('/user/current');
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
};
