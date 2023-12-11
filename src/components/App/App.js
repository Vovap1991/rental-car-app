import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage.js'));
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.js')
);
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage.js')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
