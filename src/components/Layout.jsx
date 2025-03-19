import { Suspense } from 'react';
import AppBar from './AppBar/AppBar.jsx';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
