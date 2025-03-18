import { useSelector } from 'react-redux';
import s from './FavoritesList.module.css';
import {
  selectError,
  selectFavorites,
  selectLoading,
} from '../../redux/psychologists/selectors.js';
import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <div>Loading favorites psychologists...</div>}
      {error && <h3>{error}</h3>}
      <ul className={s.psychologistList}>
        {favorites.map((item) => {
          return (
            <li key={item.uid}>
              <PsychologistCard data={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FavoritesList;
