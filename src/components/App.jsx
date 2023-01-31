import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { refreshing } from "redux/auth/authOperation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from "utils/Box";

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = refreshing();
    dispatch(action);
  }, [dispatch])

  return (
    <Box>
      <ToastContainer position="top-center" />

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} /> } />
        <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<LoginPage />} /> } />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </Box>
  )
};
