import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../Modal/Modal.jsx';
import icons from '../../assets/sprite.svg';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import { useState } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid!')
    .required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const Login = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
    onClose();
    // додати закриття по бекдропу та Esc
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.loginTitleWrap}>
        <h2 className={s.loginTitle}>Log In</h2>
        <p className={s.loginText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrap}>
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
                <svg width={20} height={20}>
                  <use href={icons + '#icon-eye'}></use>
                </svg>
              ) : (
                <svg width={20} height={20}>
                  <use href={icons + '#icon-eye-off'}></use>
                </svg>
              )}
            </button>
            {errors.password && (
              <p className={s.error}>{errors.password?.message}</p>
            )}
          </label>
        </div>
        <button className={s.loginBtn} type="submit">
          Log In
        </button>
      </form>
    </Modal>
  );
};

export default Login;
