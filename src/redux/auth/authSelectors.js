const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;

const getUserEmail = ({ auth }) => auth.user?.email;

const getIsRefreshing = ({ auth }) => auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
};

export default authSelectors;
