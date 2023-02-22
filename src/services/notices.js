import { instance } from './auth';

export const add = async notice => {
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
  return await instance.get('notices/own');
};

export const favoritesToggle = async id => {
  const { data } = await instance.get(`/notices/favorites/${id}`);
  return data;
};

export const getFavorites = async () => {
  return await instance.get('notices/favorites');
};

export const update = async (_id, updateData) => {
  return await instance(`notices/update/${_id}`, updateData);
};
