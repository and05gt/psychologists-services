import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import Layout from './components/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const PsychologistsPage = lazy(() =>
  import('./pages/PsychologistsPage/PsychologistsPage.jsx'),
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx'),
);

const App = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
