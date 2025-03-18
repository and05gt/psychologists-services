import { useSelector } from 'react-redux';
import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';
import s from './PsychologistsList.module.css';
import {
  selectError,
  selectLoading,
  selectPsychologists,
} from '../../redux/psychologists/selectors.js';

const PsychologistsList = () => {
  const psychologists = useSelector(selectPsychologists);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (psychologists.length === 0) {
    return <div>No psychologists found.</div>;
  }

  return (
    <>
      {loading && <div>Loading psychologists...</div>}
      {error && <h3>{error}</h3>}
      <ul className={s.psychologistList}>
        {psychologists.map((item) => {
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

export default PsychologistsList;
