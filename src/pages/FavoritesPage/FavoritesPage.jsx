import Container from '../../components/Container/Container.jsx';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <main>
      <Container>
        <section className={s.favoritesSection}>
          <Filters />
          <FavoritesList />
          <LoadMoreBtn />
        </section>
      </Container>
    </main>
  );
};

export default FavoritesPage;
