import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';
import s from './UserAuth.module.css';

const UserAuth = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const openLogin = (e) => {
    e.stopPropagation();
    setIsOpenLogin(true);
  };
  const closeLogin = () => setIsOpenLogin(false);

  const openRegister = (e) => {
    e.stopPropagation();
    setIsOpenRegister(true);
  };
  const closeRegister = () => setIsOpenRegister(false);

  return (
    <>
      <div className={s.headerBtnWrap}>
        <button className={s.loginBtn} type="button" onClick={openLogin}>
          Log In
        </button>
        <button className={s.regBtn} type="button" onClick={openRegister}>
          Registration
        </button>
      </div>

      <LoginForm isOpen={isOpenLogin} onClose={closeLogin} />
      <RegistrationForm isOpen={isOpenRegister} onClose={closeRegister} />
    </>
  );
};

export default UserAuth;
