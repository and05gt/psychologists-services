import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import icons from '../../assets/sprite.svg';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations.js';
import { useState } from 'react';
import { useModal } from '../ModalContext.jsx';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: yup
    .string()
    .email('Email must be a valid!')
    .required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    reset();
    closeModal();
  };

  return (
    <>
      <div className={s.registerTitleWrap}>
        <h2 className={s.registerTitle}>Registration</h2>
        <p className={s.registerText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrap}>
          <label>
            <input
              className={s.input}
              {...register('name')}
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className={s.error}>{errors.name?.message}</p>}
          </label>
          <label>
            <input
              className={s.input}
              {...register('email')}
              type="text"
              placeholder="Email"
            />
            {errors.email && <p className={s.error}>{errors.email?.message}</p>}
          </label>
          <label>
            <input
              className={s.input}
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <button
              className={s.togglePassword}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg width={16} height={16}>
                  <use href={icons + '#icon-eye'}></use>
                </svg>
              ) : (
                <svg width={16} height={16}>
                  <use href={icons + '#icon-eye-off'}></use>
                </svg>
              )}
            </button>
            {errors.password && (
              <p className={s.error}>{errors.password?.message}</p>
            )}
          </label>
        </div>
        <button className={s.registerBtn} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
