import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'))
const UserPage = lazy(() => import('../Pages/UserPage/UserPage'))
const NewsPage = lazy(() => import('../Pages/NewsPage/NewsPage'))
const NoticesPage = lazy(() => import('../Pages/NoticesPage/NoticesPage'))
const OurFriendsPage = lazy(() => import('../Pages/OurFriendsPage/OurFriendsPage'))
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage')) 
 

export const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
