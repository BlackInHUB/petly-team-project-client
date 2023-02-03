import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useAuth();

    return isLoggedIn ? children : <Navigate to="/login" />

}