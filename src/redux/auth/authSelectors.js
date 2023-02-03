const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;

const getUserEmail = ({ auth }) => auth.user?.email;

const getIsRefreshing = ({ auth }) => auth.isRefreshing;

export const getUser = state => state.auth.user;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getUser,
};

export default authSelectors;
