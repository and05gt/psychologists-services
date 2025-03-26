import s from './FavoritesList.module.css';
import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';

const FavoritesList = ({ filteredData }) => {
  return (
    <ul className={s.psychologistList}>
      {filteredData.map((item) => {
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
