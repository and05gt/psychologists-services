import icons from '../../assets/sprite.svg';
import s from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <button className={s.closeBtn} type="button" onClick={onClose}>
          <svg width={32} height={32}>
            <use href={icons + '#icon-close'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
