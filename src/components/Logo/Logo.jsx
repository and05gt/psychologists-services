import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={s.logo} to="/">
      <span className={s.logoAccentText}>
        psychologists<span>.</span>
      </span>
      services
    </Link>
  );
};

export default Logo;
