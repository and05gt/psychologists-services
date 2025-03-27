import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import PsychologistsList from '../../components/PsychologistsList/PsychologistsList.jsx';
import s from './PsychologistsPage.module.css';
import {
  selectIsLoading,
  selectLastKey,
  selectPsychologists,
  selectSortType,
} from '../../redux/psychologists/selectors.js';
import { useEffect } from 'react';
import { getPsychologists } from '../../redux/psychologists/operations.js';

const PsychologistsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const psychologists = useSelector(selectPsychologists);
  const sortType = useSelector(selectSortType);
  const lastKey = useSelector(selectLastKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPsychologists({ startKey: null, sortType }));
  }, [dispatch, sortType]);

  return (
    <main style={{ background: '#F3F3F3' }}>
      <Container>
        <section className={s.psychologistSection}>
          <Filters />
          <PsychologistsList />
          {!isLoading && <LoadMoreBtn />}
        </section>
      </Container>
    </main>
  );
};

export default PsychologistsPage;
