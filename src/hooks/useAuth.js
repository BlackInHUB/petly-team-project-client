import { useSelector } from 'react-redux';
import {
  getIsError,
  getIsLoggedIn,
  getIsRefreshing,
  getUserEmail,
  getUser,
  getPets,
  getFavorites,
  getProfile,
  getToken,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isError = useSelector(getIsError);
  const userEmail = useSelector(getUserEmail);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);
  const pets = useSelector(getPets);
  const favoritesList = useSelector(getFavorites);
  const profile = useSelector(getProfile);
  const token = useSelector(getToken);

  return {
    isLoggedIn,
    isError,
    userEmail,
    isRefreshing,
    user,
    pets,
    favoritesList,
    profile,
    token
  };
};
