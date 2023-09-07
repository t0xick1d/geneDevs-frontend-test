import { Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import Login from './page/Login/Login';
import Register from './page/Register/RegisterPage';

export const App = () => {
  return (
    <div>
      <h1> Test </h1>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
