import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/psychologists" className={buildLinkClass} end>
        Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={buildLinkClass} end>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
