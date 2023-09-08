import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import { refreshUser } from './redux-store/auth/operations';
import PrivatRoute from './PrivatRoute';
import { RestrictedRoute } from './RestrictedRoute';

import Spiner from './components/Spiner/Spiner';

import style from './App.module.css';

const TopicPage = lazy(() => import('./page/TopicPage/TopicPage'));
const LoginPage = lazy(() => import('./page/Login/Login'));
const RegisterPage = lazy(() => import('./page/Register/RegisterPage'));
const MainPage = lazy(() => import('./page/MainPage/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Spiner />
  ) : (
    <div className={style.App__container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/topic"
            element={
              <PrivatRoute redirectTo="/login" component={<TopicPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/topic" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/topic"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
