export const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const getIsError = ({ auth }) => auth.isError;

export const getUserEmail = ({ auth }) => auth.user?.email;

export const getIsRefreshing = ({ auth }) => auth.isRefreshing;

export const getUser = ({ auth }) => auth.user;

export const getPets = ({ auth }) => auth.pets;

export const getFavorites = ({ auth }) => auth.user?.favorites;

export const getProfile = ({ auth }) => auth.profile;
