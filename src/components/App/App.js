import { Header } from 'components/Header/Header';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
};
