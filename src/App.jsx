import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import { refreshUser } from './redux/auth/operations.js';
import PrivateRoute from './components/PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const PsychologistsPage = lazy(() =>
  import('./pages/PsychologistsPage/PsychologistsPage.jsx'),
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx'),
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h3>Loading...</h3>
  ) : (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute component={<FavoritesPage />} redirectTo="/" />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
