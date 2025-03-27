import { useSelector } from 'react-redux';
import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';
import s from './PsychologistsList.module.css';
import {
  selectError,
  selectIsLoading,
  selectPsychologists,
} from '../../redux/psychologists/selectors.js';

const PsychologistsList = () => {
  const data = useSelector(selectPsychologists);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {data.length === 0 && <h3>No psychologists found</h3>}
      <ul className={s.psychologistList}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <PsychologistCard data={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PsychologistsList;
