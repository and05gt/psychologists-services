import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/sprite.svg';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors.js';
import { logout } from '../../redux/auth/operations.js';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <div className={s.userWrap}>
        <div className={s.avatar}>
          <svg width={24} height={24}>
            <use href={icons + '#icon-user'}></use>
          </svg>
        </div>
        <p className={s.username}>{user.displayName}</p>
      </div>
      <button
        className={s.logoutBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
