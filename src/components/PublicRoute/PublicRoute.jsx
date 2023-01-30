import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";
import { useSelector } from "react-redux";

export const PublicRoute = ({children}) => {
    const { isLoggedIn } = useSelector(authSelectors.getIsLoggedIn)

    return isLoggedIn ? <Navigate to="/user" /> : children
    
}