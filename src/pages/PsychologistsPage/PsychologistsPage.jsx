import Container from '../../components/Container/Container.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import PsychologistsList from '../../components/PsychologistsList/PsychologistsList.jsx';
import s from './PsychologistsPage.module.css';

const PsychologistsPage = () => {
  return (
    <main>
      <Container>
        <section className={s.psychologistSection}>
          <Filters />
          <PsychologistsList />
          <LoadMoreBtn />
        </section>
      </Container>
    </main>
  );
};

export default PsychologistsPage;
