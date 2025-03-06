import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import icons from '../../assets/sprite.svg';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <Logo />
        <Navigation />
      </div>
      <div className={s.headerBtnWrap}>
        <button className={s.loginBtn} type="button">
          Log In
        </button>
        <button className={s.regBtn} type="button">
          Registration
        </button>
      </div>
      <button className={s.headerBtn} type="button">
        <svg width={34} height={34}>
          <use href={icons + '#icon-menu'}></use>
        </svg>
      </button>
    </header>
  );
};

export default AppBar;
