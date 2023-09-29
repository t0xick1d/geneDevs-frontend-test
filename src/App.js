import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import { refreshUser } from './redux-store/auth/operations';
import PrivatRoute from './PrivatRoute';
import { RestrictedRoute } from './RestrictedRoute';

import Spiner from './components/Spiner/Spiner';

const TopicPage = lazy(() => import('./page/TopicPage/TopicPage'));
const LoginPage = lazy(() => import('./page/Login/Login'));
const RegisterPage = lazy(() => import('./page/Register/RegisterPage'));
const MainPage = lazy(() => import('./page/MainPage/MainPage'));
const QuestionPage = lazy(() => import('./page/QestionPage/QestionPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Spiner />
  ) : (
    <div
      style={{
        backgroundColor: 'rgb(232, 232, 232)',
        color: '#010101',
      }}
    >
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
            path="/topic/question/:idTopic"
            element={
              <PrivatRoute redirectTo="/login" component={<QuestionPage />} />
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
