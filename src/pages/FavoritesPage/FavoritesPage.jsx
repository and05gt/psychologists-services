import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import s from './FavoritesPage.module.css';
import {
  selectError,
  selectFavorites,
  selectIsLoading,
  selectSortType,
} from '../../redux/psychologists/selectors.js';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const sortType = useSelector(selectSortType);
  const [data, setData] = useState([]);

  let filtered = [...favorites];

  useEffect(() => {
    switch (sortType) {
      case 'A to Z':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z to A':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Less than 10$':
        filtered.sort((a, b) => a.price_per_hour - b.price_per_hour);
        filtered = filtered.filter((item) => item.price_per_hour < 10);
        break;
      case 'Greater than 10$':
        filtered.sort((a, b) => b.price_per_hour - a.price_per_hour);
        filtered = filtered.filter((item) => item.price_per_hour >= 10);
        break;
      case 'Popular':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'Not popular':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'Show all':
      default:
        break;
    }
    setData(filtered);
  }, [sortType, favorites]);

  return (
    <main style={{ background: '#F3F3F3' }}>
      <Container>
        <section className={s.favoritesSection}>
          {isLoading && <div>Loading favorites psychologists...</div>}
          {error && <h3>{error}</h3>}
          <Filters />
          <FavoritesList filteredData={data} />
        </section>
      </Container>
    </main>
  );
};

export default FavoritesPage;
