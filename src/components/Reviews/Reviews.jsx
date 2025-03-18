import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './Reviews.module.css';
import ReviewsForm from '../ReviewsForm/ReviewsForm.jsx';

const Reviews = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const { avatar_url, name, reviews } = data;

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
      <button className={s.reviewsBtn} type="button" onClick={openModal}>
        Make an appointment
      </button>

      <ReviewsForm
        isOpen={isOpenModal}
        onClose={closeModal}
        avatar={avatar_url}
        name={name}
      />
    </>
  );
};

export default Reviews;
