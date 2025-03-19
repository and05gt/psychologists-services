import { useState } from 'react';
import icons from '../../assets/sprite.svg';
import Reviews from '../Reviews/Reviews.jsx';
import s from './PsychologistCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/psychologists/selectors.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { toggleFavorite } from '../../redux/psychologists/slice.js';
import toast from 'react-hot-toast';

const PsychologistCard = ({ data }) => {
  const [showReviews, setShowReviews] = useState(false);
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((favorite) => favorite?.uid === data?.uid);

  const addFavorite = (item) => {
    if (isLoggedIn) {
      dispatch(toggleFavorite(item));
    } else {
      toast.error('This functionality is available only to authorized users');
      return;
    }
  };

  return (
    <div className={s.cardContainer}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={data.avatar_url} alt="Avatar" />
        <svg width={14} height={14}>
          <use href={icons + '#icon-online'}></use>
        </svg>
      </div>
      <div className={s.infoContainer}>
        <div className={s.infoHeader}>
          <div className={s.infoTitleWrap}>
            <p className={s.infoSubTitle}>Psychologist</p>
            <h3 className={s.infoTitle}>{data.name}</h3>
          </div>
          <div className={s.additionalBlock}>
            <div className={s.ratingWrap}>
              <svg width={14} height={14}>
                <use href={icons + '#icon-star'}></use>
              </svg>
              <p className={s.ratingText}>Rating: {data.rating}</p>
            </div>
            <p className={s.priceText}>
              Price / 1 hour: <span>{data.price_per_hour}$</span>
            </p>
            <button
              className={s.favoriteBtn}
              type="button"
              onClick={() => addFavorite(data)}
            >
              {isFavorite && isLoggedIn ? (
                <svg className={s.favoriteSvg} width={20} height={20}>
                  <use href={icons + '#icon-heart-selected'}></use>
                </svg>
              ) : (
                <svg width={20} height={20}>
                  <use href={icons + '#icon-heart'}></use>
                </svg>
              )}
            </button>
          </div>
        </div>
        <ul className={s.infoList}>
          <li className={s.infoListItem}>
            Experience: <span>{data.experience}</span>
          </li>
          <li className={s.infoListItem}>
            License: <span>{data.license}</span>
          </li>
          <li className={s.infoListItem}>
            Specialization: <span>{data.specialization}</span>
          </li>
          <li className={s.infoListItem}>
            Initial_consultation: <span>{data.initial_consultation}</span>
          </li>
        </ul>
        <p className={s.infoText}>{data.about}</p>
        {showReviews ? (
          <Reviews data={data} />
        ) : (
          <button
            className={s.infoBtn}
            type="button"
            onClick={() => setShowReviews(!showReviews)}
          >
            Read more
          </button>
        )}
      </div>
    </div>
  );
};

export default PsychologistCard;
