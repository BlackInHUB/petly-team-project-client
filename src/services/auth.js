import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://petly.onrender.com/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async user => {
  const { data } = await instance.post('/auth/register', user);
  setToken(data.token);
  return data.user;
};

export const login = async user => {
  const { data } = await instance.post('/auth/login', user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  try {
    await instance.get('/auth/logout');

    setToken('');
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const refresh = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/user/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};
