import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { authOperations, authSelectors } from '../redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const PhonebookView = lazy(() => import('../views/PhonebookView'));

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute>
                <PhonebookView />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
