import s from './FavoritesList.module.css';
import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';

const FavoritesList = ({ filteredData, count }) => {
  return (
    <ul className={s.psychologistList}>
      {filteredData.length === 0 && <h3>No psychologists found</h3>}
      {filteredData.slice(0, count).map((item) => {
        return (
          <li key={item.id}>
            <PsychologistCard data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
