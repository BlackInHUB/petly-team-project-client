const getIsLoggedIn = ({ auth }) => auth.isLoggedIn;

const getUserEmail = ({ auth }) => auth.user?.email;

const getIsRefreshing = ({ auth }) => auth.isRefreshing;

const getUserName = ({ auth }) => auth.user?.username;

const getUserBirthday = ({ auth }) => auth.user?.birthday;

const getUserPhone = ({ auth }) => auth.user?.phone;

const getUserCity = ({ auth }) => auth.user?.city;

const getUserAvatarUrl = ({ auth }) => auth.user?.avatarUrl;

export const getUser = state => state.auth.user;

// const getUser = ({ auth }) => auth.user;
// console.log('getUser', getUser)


const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getUserName,
  getUserBirthday,
  getUserPhone,
  getUserCity,
  getUserAvatarUrl,
  getUser,
};

export default authSelectors;
