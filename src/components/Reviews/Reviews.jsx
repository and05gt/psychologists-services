import icons from '../../assets/sprite.svg';
import s from './Reviews.module.css';

const Reviews = () => {
  return (
    <>
      <ul className={s.reviewsList}>
        <li className={s.reviewsListItem}>
          <div className={s.reviewsHeader}>
            <span>M</span>
            <div className={s.reviewsHeaderWrap}>
              <p className={s.reviewsAuthor}>Michael Brown</p>
              <div className={s.reviewsRatingWrap}>
                <svg width={16} height={16}>
                  <use href={icons + '#icon-star'}></use>
                </svg>
                <p className={s.reviewsRating}>4.5</p>
              </div>
            </div>
          </div>
          <p className={s.reviewsText}>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </p>
        </li>
        <li className={s.reviewsListItem}>
          <div className={s.reviewsHeader}>
            <span>L</span>
            <div className={s.reviewsHeaderWrap}>
              <p className={s.reviewsAuthor}>Linda Johnson</p>
              <div className={s.reviewsRatingWrap}>
                <svg width={16} height={16}>
                  <use href={icons + '#icon-star'}></use>
                </svg>
                <p className={s.reviewsRating}>5.0</p>
              </div>
            </div>
          </div>
          <p className={s.reviewsText}>
            I'm very satisfied with Dr. Davis's therapy. She's understanding and
            empathetic.
          </p>
        </li>
      </ul>
      <button className={s.reviewsBtn} type="button">
        Make an appointment
      </button>
    </>
  );
};

export default Reviews;
