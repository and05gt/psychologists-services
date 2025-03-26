import { useEffect, useRef } from 'react';
import icons from '../../assets/sprite.svg';
import s from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleBackdropClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleBackdropClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal} ref={modalRef}>
        <button className={s.closeBtn} type="button" onClick={onClose}>
          <svg width={24} height={24}>
            <use href={icons + '#icon-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
