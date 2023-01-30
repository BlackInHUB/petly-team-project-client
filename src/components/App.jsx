import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

const LoginView = lazy(() => import('pages/auth/login/LoginView'));
const RegisterView = lazy(() => import('pages/auth/register/RegisterView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  console.log(isLoggedIn);

  return (
    !isRefreshing && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FDF7F2',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            padding: '0px 10px',
            width: '100%',
            height: '100px',
            backgroundColor: 'orange',
          }}
        >
          APP BAR
          <button
            onClick={() => {
              dispatch(authOperations.logout());
            }}
          >
            {' '}
            Logout{' '}
          </button>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path="/register"
              element={
                isLoggedIn ? <Navigate replace to="/user" /> : <RegisterView />
              }
            />
            <Route
              path="/login"
              element={
                isLoggedIn ? <Navigate replace to="/user" /> : <LoginView />
              }
            />
          </Routes>
        </Suspense>
      </div>
    )
  );
};
