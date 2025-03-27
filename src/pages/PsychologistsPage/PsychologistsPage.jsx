import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';
import PsychologistsList from '../../components/PsychologistsList/PsychologistsList.jsx';
import s from './PsychologistsPage.module.css';
import {
  selectIsLoading,
  selectSortQuery,
  selectSortType,
} from '../../redux/psychologists/selectors.js';
import { useEffect } from 'react';
import {
  getPsychologistsFromAtoZ,
  getPsychologistsFromZtoA,
  getPsychologistsGreater10,
  getPsychologistsLess10,
  getPsychologistsNotPopular,
  getPsychologistsPopular,
} from '../../redux/psychologists/operations.js';

const PsychologistsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const sortQuery = useSelector(selectSortQuery);
  const sortType = useSelector(selectSortType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortType === 'A to Z' || sortType === 'Show all') {
      dispatch(getPsychologistsFromAtoZ(sortQuery));
    } else if (sortType === 'Z to A') {
      dispatch(getPsychologistsFromZtoA(sortQuery));
    } else if (sortType === 'Less than 10$') {
      dispatch(getPsychologistsLess10(sortQuery));
    } else if (sortType === 'Greater than 10$') {
      dispatch(getPsychologistsGreater10(sortQuery));
    } else if (sortType === 'Popular') {
      dispatch(getPsychologistsPopular(sortQuery));
    } else if (sortType === 'Not popular') {
      dispatch(getPsychologistsNotPopular(sortQuery));
    }
  }, [dispatch, sortQuery, sortType]);

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
