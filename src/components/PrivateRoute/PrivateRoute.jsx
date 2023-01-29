import { Navigate } from "react-router-dom";
import { getAuth } from "redux/selectors"; 
import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useSelector(getAuth)

    return isLoggedIn ? children : <Navigate to="/login" />

}