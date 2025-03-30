import icons from '../../assets/sprite.svg';
import s from './Reviews.module.css';
import ReviewsForm from '../ReviewsForm/ReviewsForm.jsx';
import { useModal } from '../ModalContext.jsx';

const Reviews = ({ data }) => {
  const { avatar_url, name, reviews } = data;
  const { openModal } = useModal();

  return (
    <>
      <ul className={s.reviewsList}>
        {reviews.map((review, index) => {
          return (
            <li key={index} className={s.reviewsListItem}>
              <div className={s.reviewsHeader}>
                <span>{review.reviewer.slice(0, 1)}</span>
                <div className={s.reviewsHeaderWrap}>
                  <p className={s.reviewsAuthor}>{review.reviewer}</p>
                  <div className={s.reviewsRatingWrap}>
                    <svg width={14} height={14}>
                      <use href={icons + '#icon-star'}></use>
                    </svg>
                    <p className={s.reviewsRating}>{review.rating}</p>
                  </div>
                </div>
              </div>
              <p className={s.reviewsText}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
      <button
        className={s.reviewsBtn}
        type="button"
        onClick={() =>
          openModal(<ReviewsForm avatar={avatar_url} name={name} />)
        }
      >
        Make an appointment
      </button>
    </>
  );
};

export default Reviews;
