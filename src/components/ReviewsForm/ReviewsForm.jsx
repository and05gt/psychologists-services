import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../Modal/Modal.jsx';
import avatar from '../../assets/img/avatar-1.webp';
import TimeSelect from '../TimeSelect/TimeSelect.jsx';
import s from './ReviewsForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  tel: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[0-9]/, 'The number must consist of numbers!')
    .required('Phone number is required!'),
  time: yup.string().required('Time is required!'),
  email: yup
    .string()
    .email('Email must be a valid!')
    .required('Email is required!'),
  comment: yup.string(),
});

const ReviewsForm = ({ isOpen, onClose, name, avatar }) => {
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
    // додати react-hot-toast
    // додати закриття по бекдропу та Esc
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          <h3 className={s.psychologistName}>{name}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formWrapper}>
          <label>
            <input
              className={s.input}
              {...register('name')}
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className={s.error}>{errors.name?.message}</p>}
          </label>
          <div className={s.telTimeWrap}>
            <label>
              <input
                className={s.input}
                {...register('tel')}
                type="tel"
                placeholder="+380"
              />
              {errors.tel && <p className={s.error}>{errors.tel?.message}</p>}
            </label>
            <label>
              {/* <input
                  className={s.input}
                  {...register('time')}
                  type="time"
                  placeholder="00:00"
                /> */}

              <TimeSelect />

              {errors.time && <p className={s.error}>{errors.time?.message}</p>}
            </label>
          </div>
          <label>
            <input
              className={s.input}
              {...register('email')}
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className={s.error}>{errors.email?.message}</p>}
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
    </Modal>
  );
};

export default ReviewsForm;
