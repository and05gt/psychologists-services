import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/psychologists" className={buildLinkClass} end>
        Psychologists
      </NavLink>
      <NavLink to="/favorites" className={buildLinkClass} end>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
