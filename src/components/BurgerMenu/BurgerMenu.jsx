import { useEffect, useRef, useState } from 'react';
import icons from '../../assets/sprite.svg';
import s from './BurgerMenu.module.css';
import Navigation from '../Navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleCloseMenu = (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget || e.code === 'Escape')
      console.log('called handleCloseMenu');

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsMenuOpen]);

  return (
    <>
      <button
        className={s.headerBtn}
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg width={34} height={34}>
          <use href={icons + '#icon-menu'}></use>
        </svg>
      </button>

      {isMenuOpen && (
        <div className={s.menuOverlay}>
          <div
            className={s.menuContainer}
            ref={menuRef}
            // onClick={handleCloseMenu}
          >
            <button
              className={s.closeMenuBtn}
              type="button"
              onClick={handleCloseMenu}
            >
              <svg width={32} height={32}>
                <use href={icons + '#icon-close'}></use>
              </svg>
            </button>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <UserAuth />}
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
