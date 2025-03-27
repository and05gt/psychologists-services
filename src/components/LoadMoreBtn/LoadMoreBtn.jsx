import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMoreBtn.module.css';
import {
  selectLastKey,
  selectPsychologists,
  selectSortType,
} from '../../redux/psychologists/selectors.js';
import { getPsychologists } from '../../redux/psychologists/operations.js';

const LoadMoreBtn = () => {
  const psychologists = useSelector(selectPsychologists);
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);
  const lastKey = useSelector(selectLastKey);

  const handleLoadMore = () => {
    dispatch(getPsychologists({ startKey: lastKey, sortType }));
  };

  return (
    <>
      {lastKey && psychologists.length > 0 && (
        <button
          className={s.loadMoreBtn}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
