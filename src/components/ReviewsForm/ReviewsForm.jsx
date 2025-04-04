import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TimeSelect from '../TimeSelect/TimeSelect.jsx';
import s from './ReviewsForm.module.css';
import toast from 'react-hot-toast';
import { ref, push, set } from 'firebase/database';
import { database } from '../../firebase.js';
import { useModal } from '../ModalContext.jsx';

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
  comment: yup.string().required('Comment is required!'),
});

const ReviewsForm = ({ avatar, name }) => {
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTimeSelect = (time) => {
    setValue('time', time);
  };

  const onSubmit = async (data) => {
    try {
      const appointmentsRef = ref(database, 'appointments');
      const newAppointmentRef = push(appointmentsRef);

      await set(newAppointmentRef, {
        name: data.name,
        tel: data.tel,
        time: data.time,
        email: data.email,
        comment: data.comment,
      });

      toast.success('Successfully created personal meeting appointment');
      reset();
      closeModal();
    } catch (error) {
      toast.error('Failed to create appointment. Please try again later.');
    }
  };

  return (
    <>
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

        <div className={s.psychologistContainer}>
          <img className={s.psychologistImg} src={avatar} alt="Avatar" />
          <div className={s.psychologistWrap}>
            <p className={s.psychologistText}>Your psychologists</p>
            <h3 className={s.psychologistName}>{name}</h3>
          </div>
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
              <TimeSelect onTimeSelect={handleTimeSelect} />
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
    </>
  );
};

export default ReviewsForm;
