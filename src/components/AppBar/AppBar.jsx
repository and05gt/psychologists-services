import { useState } from 'react';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import icons from '../../assets/sprite.svg';
import LoginForm from '../LoginForm/LoginForm.jsx';
import s from './AppBar.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={s.headerBtnWrap}>
          <button className={s.loginBtn} type="button" onClick={openLogin}>
            Log In
          </button>
          <button className={s.regBtn} type="button" onClick={openRegister}>
            Registration
          </button>
        </div>
      )}
      {/* зробити юзерменю адаптивним і додати функціонал до кнопки меню */}
      <button className={s.headerBtn} type="button">
        <svg width={34} height={34}>
          <use href={icons + '#icon-menu'}></use>
        </svg>
      </button>

      <LoginForm isOpen={isOpenLogin} onClose={closeLogin} />
      <RegistrationForm isOpen={isOpenRegister} onClose={closeRegister} />
    </header>
  );
};

export default AppBar;
