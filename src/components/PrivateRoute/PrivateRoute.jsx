import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return isLoggedIn ? children : <Navigate to="/login" />

}