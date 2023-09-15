import React from 'react';
import { useDispatch } from 'react-redux';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { register } from 'redux-store/auth/operations';
 import style from './style.module.css';

 export default function Register() {
   const dispatch = useDispatch();

   const formik = useFormik({
     initialValues: {
       nickName: '',
       email: '',
       password: '',
     },
     validationSchema: Yup.object({
       nickName: Yup.string()
         .max(10, 'Must be 10 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required('Required'),
     }),
     onSubmit: (values, { resetForm }) => {
       dispatch(register(values));
       resetForm();
     },
   });

   return (
     <div>
       <form
         style={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         }}
         onSubmit={formik.handleSubmit}
         autoComplete="off"
       >
         <label htmlFor="nickName" className={style.Login__title}>
           Username
         </label>
         <input
           id="nickName"
           type="text"
           name="nickName"
           className={style.input__form}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.nickName}
         />
         {formik.touched.nickName && formik.errors.nickName ? (
           <div>{formik.errors.nickName}</div>
         ) : null}

         <label htmlFor="email" className={style.Login__title}>
           Email
         </label>
         <input
           id="email"
           type="email"
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
           Register
         </button>
       </form>
     </div>
   );
 }
