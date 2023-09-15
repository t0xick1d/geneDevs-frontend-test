import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux-store/auth/operations';
import style from './style.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));

      resetForm();
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label htmlFor="email" className={style.Login__title}>
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className={style.input__form}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password" className={style.Login__title}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className={style.input__form}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit" className={style.form__button}>
          Log In
        </button>
      </form>
    </div>
  );
}
