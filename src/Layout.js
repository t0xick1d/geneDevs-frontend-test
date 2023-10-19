import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Suspense } from 'react';
import Spiner from './components/Spiner/Spiner';

import styled from './App.module.css';

const Layout = () => {
  return (
    <div className={styled.App__container}>
      <Navigation />
      <main style={{ padding: 20 }}>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;