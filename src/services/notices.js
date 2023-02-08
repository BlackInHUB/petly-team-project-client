import { instance } from './auth';

export const add = async notice => {
  console.log(notice)
  return await instance.post('notices/', notice);
};

export const getAll = async (category, filter) => {
  const reqParams = filter !== '' ? `notices/${category}?${new URLSearchParams({filter})}` : `notices/${category}`;
  return await instance.get(reqParams);
};

export const getOne = async id => {
  return await instance.get(`notices/details/${id}`);
};

export const remove = async id => {
  return await instance.delete(`notices/${id}`);
};

export const getOwn = async () => {
  return await instance.get('notices/user/own');
};

export const getFavorites = async () => {
  return await instance.get('notices/user/favorites');
};
