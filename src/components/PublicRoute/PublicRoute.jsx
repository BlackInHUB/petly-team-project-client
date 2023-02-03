import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PublicRoute = ({children}) => {
    const {isLoggedIn} = useAuth();

    return isLoggedIn ? <Navigate to="/user" /> : children
    
}