import s from './Logo.module.css';

const Logo = () => {
  return (
    <p className={s.logo}>
      <span className={s.logoAccentText}>
        psychologists<span>.</span>
      </span>
      services
    </p>
  );
};

export default Logo;
