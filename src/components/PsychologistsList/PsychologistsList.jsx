import PsychologistCard from '../PsychologistCard/PsychologistCard.jsx';
import s from './PsychologistsList.module.css';

const PsychologistsList = () => {
  return (
    <div className={s.psychologistList}>
      <PsychologistCard />
      <PsychologistCard />
    </div>
  );
};

export default PsychologistsList;
