import avatar from '../../assets/img/avatar-1.webp';
import icons from '../../assets/sprite.svg';
import Reviews from '../Reviews/Reviews.jsx';
import s from './PsychologistCard.module.css';

const PsychologistCard = () => {
  return (
    <div className={s.cardContainer}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={avatar} alt="Avatar" />
        <svg width={14} height={14}>
          <use href={icons + '#icon-online'}></use>
        </svg>
      </div>
      <div className={s.infoContainer}>
        <div className={s.infoHeader}>
          <div className={s.infoTitleWrap}>
            <p className={s.infoSubTitle}>Psychologist</p>
            <h3 className={s.infoTitle}>Dr. Sarah Davis</h3>
          </div>
          <div className={s.additionalBlock}>
            <div className={s.ratingWrap}>
              <svg width={16} height={16}>
                <use href={icons + '#icon-star'}></use>
              </svg>
              <p className={s.ratingText}>Rating: 4.75</p>
            </div>
            <p className={s.priceText}>
              Price / 1 hour: <span>120$</span>
            </p>
            <button className={s.favoriteBtn} type="button">
              <svg width={26} height={26}>
                <use href={icons + '#icon-heart'}></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={s.infoList}>
          <li className={s.infoListItem}>
            Experience: <span>12 years</span>
          </li>
          <li className={s.infoListItem}>
            License: <span>Licensed Psychologist (License #67890)</span>
          </li>
          <li className={s.infoListItem}>
            Specialization: <span>Depression and Mood Disorders</span>
          </li>
          <li className={s.infoListItem}>
            Initial_consultation:{' '}
            <span>Free 45-minute initial consultation</span>
          </li>
        </ul>
        <p className={s.infoText}>
          Dr. Sarah Davis is a highly experienced and licensed psychologist
          specializing in Depression and Mood Disorders. With 12 years of
          practice, she has helped numerous individuals overcome their
          depression and regain control of their lives. Dr. Davis is known for
          her empathetic and understanding approach to therapy, making her
          clients feel comfortable and supported throughout their journey to
          better mental health.
        </p>
        <button className={s.infoBtn} type="button">
          Read more
        </button>
        <Reviews />
      </div>
    </div>
  );
};

export default PsychologistCard;
