import { useEffect } from 'react';
import icons from '../../assets/sprite.svg';
import s from './ModalBackdrop.module.css';
import { useModal } from '../ModalContext.jsx';

const ModalBackdrop = ({ children }) => {
  const { isModalOpen, closeModal, handleCloseModal } = useModal();

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={s.modalOverlay} onClick={handleCloseModal}>
      <div className={s.modal}>
        <button className={s.closeBtn} type="button" onClick={closeModal}>
          <svg width={24} height={24}>
            <use href={icons + '#icon-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBackdrop;
