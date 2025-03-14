import { useState } from 'react';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import icons from '../../assets/sprite.svg';
import Login from '../Login/Login.jsx';
import s from './AppBar.module.css';
import Registration from '../Registration/Registration.jsx';

const AppBar = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const openLogin = () => setIsOpenLogin(true);
  const closeLogin = () => setIsOpenLogin(false);

  const openRegister = () => setIsOpenRegister(true);
  const closeRegister = () => setIsOpenRegister(false);

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <Logo />
        <Navigation />
      </div>
      <div className={s.headerBtnWrap}>
        <button className={s.loginBtn} type="button" onClick={openLogin}>
          Log In
        </button>
        <button className={s.regBtn} type="button" onClick={openRegister}>
          Registration
        </button>
      </div>
      <button className={s.headerBtn} type="button">
        <svg width={34} height={34}>
          <use href={icons + '#icon-menu'}></use>
        </svg>
      </button>

      <Login isOpen={isOpenLogin} onClose={closeLogin} />
      <Registration isOpen={isOpenRegister} onClose={closeRegister} />
    </header>
  );
};

export default AppBar;
