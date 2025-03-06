import { Suspense } from 'react';
import AppBar from './AppBar/AppBar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
