import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({children}) => {
    const {token, isLoggedIn} = useAuth();
    const redirect = !token && !isLoggedIn;

    return redirect ? <Navigate to="/login" /> : children;

}