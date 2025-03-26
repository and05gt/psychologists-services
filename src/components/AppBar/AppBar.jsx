import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import s from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import { useEffect, useState } from 'react';
import Container from '../Container/Container.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          {windowWidth < 1440 && (
            <>
              <Logo />
              <BurgerMenu />
            </>
          )}
          {windowWidth >= 1440 && (
            <>
              <Logo />
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <UserAuth />}
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
