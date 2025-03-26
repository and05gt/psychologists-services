import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMoreBtn.module.css';
import {
  selectHasNextPage,
  selectPsychologists,
  selectSortType,
} from '../../redux/psychologists/selectors.js';
import { getNextRequest } from '../../redux/psychologists/slice.js';

const LoadMoreBtn = () => {
  const psychologists = useSelector(selectPsychologists);
  const hasNextPage = useSelector(selectHasNextPage);
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);

  let sortQuery = psychologists[psychologists.length - 1]?.name;
  if (sortType === 'Less than 10$' || sortType === 'Greater than 10$') {
    sortQuery = psychologists[psychologists.length - 1]?.price_per_hour;
  } else if (sortType === 'Popular' || sortType === 'Not popular') {
    sortQuery = psychologists[psychologists.length - 1]?.rating;
  }

  const handleLoadMore = () => {
    dispatch(getNextRequest(sortQuery));
  };

  return (
    <>
      {hasNextPage && (
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
