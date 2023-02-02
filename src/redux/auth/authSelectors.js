const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;

const getIsError = ({ auth }) => auth.isError;

const getUserEmail = ({ auth }) => auth.user?.email;

const getIsRefreshing = ({ auth }) => auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getIsError,
};

export default authSelectors;
