import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Suspense } from 'react';
import Spiner from './components/Spiner/Spiner';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
