import { useSelector } from 'react-redux';
import {
  getIsError,
  getIsLoggedIn,
  getIsRefreshing,
  getUserEmail,
  getUser,
  getPets,
  getFavorites,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isError = useSelector(getIsError);
  const userEmail = useSelector(getUserEmail);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);
  const pets = useSelector(getPets);
  const favoritesList = useSelector(getFavorites);

  return {
    isLoggedIn,
    isError,
    userEmail,
    isRefreshing,
    user,
    pets,
    favoritesList,
  };
};