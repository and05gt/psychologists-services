import s from './UserAuth.module.css';
import { useModal } from '../ModalContext.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

const UserAuth = () => {
  const { openModal } = useModal();

  return (
    <div className={s.headerBtnWrap}>
      <button
        className={s.loginBtn}
        type="button"
        onClick={() => openModal(<LoginForm />)}
      >
        Log In
      </button>
      <button
        className={s.regBtn}
        type="button"
        onClick={() => openModal(<RegistrationForm />)}
      >
        Registration
      </button>
    </div>
  );
};

export default UserAuth;
