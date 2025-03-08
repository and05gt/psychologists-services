import Container from '../../components/Container/Container.jsx';
import heroImg from '../../assets/img/hero-img.webp';
import heroImg2x from '../../assets/img/hero-img@2x.webp';
import icons from '../../assets/sprite.svg';
import { useNavigate } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Container>
        <section className={s.homeSection}>
          <div>
            <h1 className={s.heroTitle}>
              The road to the <span>depths</span> of the human soul
            </h1>
            <p className={s.heroText}>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <button
              className={s.heroBtn}
              type="button"
              onClick={() => navigate('/psychologists')}
            >
              Get started{' '}
              <svg width={15} height={17}>
                <use href={icons + '#icon-arrow'}></use>
              </svg>
            </button>
          </div>
          <div className={s.imageWrap}>
            <img
              className={s.heroImg}
              src={heroImg}
              alt="Image"
              srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}
              width={264}
              height={326}
            />
            <div className={s.checkWrap}>
              <span>
                <svg width={30} height={30}>
                  <use href={icons + '#icon-check'}></use>
                </svg>
              </span>
              <div className={s.checkTextWrap}>
                <p className={s.checkText}>Experienced psychologists</p>
                <p className={s.checkSum}>15,000</p>
              </div>
            </div>
            <span className={s.questionWrap}>
              <svg width={10} height={17}>
                <use href={icons + '#icon-question'}></use>
              </svg>
            </span>
            <span className={s.usersWrap}>
              <svg width={25} height={25}>
                <use href={icons + '#icon-users'}></use>
              </svg>
            </span>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
