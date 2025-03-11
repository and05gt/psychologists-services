import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import icons from '../../assets/sprite.svg';
import avatar from '../../assets/img/avatar-1.webp';
import s from './Modal.module.css';

const schema = yup.object({
  name: yup.string().required(),
  tel: yup.number().required(),
  time: yup.number().required(),
  email: yup.string().email().required(),
  comment: yup.string(),
});

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <button className={s.closeBtn} type="button">
          <svg width={32} height={32}>
            <use href={icons + '#icon-close'}></use>
          </svg>
        </button>
        <div className={s.modalTitleWrap}>
          <h2 className={s.modalTitle}>
            Make an appointment with a psychologists
          </h2>
          <p className={s.modalText}>
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </p>
        </div>

        <div className={s.psychologistContainer}>
          <img className={s.psychologistImg} src={avatar} alt="Avatar" />
          <div className={s.psychologistWrap}>
            <p className={s.psychologistText}>Your psychologists</p>
            <h3 className={s.psychologistName}>Dr. Sarah Davis</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.formWrapper}>
            <label className={s.label}>
              <input
                className={s.input}
                {...register('name')}
                type="text"
                placeholder="Name"
              />
              <p className={s.error}>{errors.name?.message}</p>
            </label>
            <div className={s.telTimeWrap}>
              <label>
                <input
                  className={s.input}
                  {...register('tel')}
                  type="tel"
                  placeholder="+380"
                />
                <p className={s.error}>{errors.tel?.message}</p>
              </label>
              <label>
                <input
                  className={s.input}
                  {...register('time')}
                  type="time"
                  placeholder="00:00"
                />
                <p className={s.error}>{errors.time?.message}</p>
              </label>
            </div>
            <label className={s.label}>
              <input
                className={s.input}
                {...register('email')}
                type="email"
                placeholder="Email"
              />
              <p className={s.error}>{errors.email?.message}</p>
            </label>
            <textarea
              className={s.inputComment}
              {...register('comment')}
              type="text"
              placeholder="Comment"
            />
          </div>
          <button className={s.formBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
