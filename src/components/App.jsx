import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const UserPage = lazy(() => import('../pages/UserPage/UserPage'))
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'))
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'))
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')) 
 

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
