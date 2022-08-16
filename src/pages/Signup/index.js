import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from '../Login/style.module.css';

import { registerUser } from '../../apis';
import { setStorageData, USER_DATA } from '../../services/storage';
import Typography from '../../components/Typography';
import { toastSuccess, toastError } from '../../services/toastify';

const Signup = () => {
  let navigate = useNavigate();

  useEffect(() => {
    console.log('Hey, I am Signup');
  }, []);

  const gotoHome = () => {
    navigate('/');
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validator = (values) => {
    const errors = {};

    // first name validation
    if (!values.firstName) {
      errors.firstName = 'Please enter first name';
    }

    // last name validation
    if (!values.lastName) {
      errors.lastName = 'Please enter last name';
    }

    // email validation
    if (!values.email) {
      errors.email = 'Please enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }

    // password validation
    if (!values.password) {
      errors.password = 'Please enter a valid password';
    }

    // confirm password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please enter confirm password';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password not matched';
    }

    return errors;
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await registerUser(values);
    if (!response.status.error) {
      toastSuccess(response.status.message);
      setStorageData(USER_DATA, response.data);
      // Got to homepage
      gotoHome();
    } else {
      toastError(response.status.message);
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.form}>
      <Typography className={styles.title} type='H2'>
        Signup
      </Typography>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {MyForm}
      </Formik>

      <div className={styles.pageLink}>
        Already registered? <Link to='/login'>click here</Link>
      </div>
    </div>
  );
};

const MyForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label>
          <span className={styles.label}>Enter your first name</span>
          <input
            type='text'
            name='firstName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            placeholder='John'
            className={styles.input}
          />
        </label>
        {errors.firstName && touched.firstName ? (
          <span className={styles.error}>{errors.firstName}</span>
        ) : null}
      </div>

      <div className={styles.formControl}>
        <label>
          <span className={styles.label}>Enter your last name</span>
          <input
            type='text'
            name='lastName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            placeholder='Doe'
            className={styles.input}
          />
        </label>
        {errors.lastName && touched.lastName ? (
          <span className={styles.error}>{errors.lastName}</span>
        ) : null}
      </div>

      <div className={styles.formControl}>
        <label>
          <span className={styles.label}>Enter your email</span>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='abc@example.com'
            className={styles.input}
          />
        </label>
        {errors.email && touched.email ? (
          <span className={styles.error}>{errors.email}</span>
        ) : null}
      </div>

      <div className={styles.formControl}>
        <label>
          <span className={styles.label}> Enter your password</span>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={styles.input}
          />
        </label>
        {errors.password && touched.password ? (
          <span className={styles.error}>{errors.password}</span>
        ) : null}
      </div>

      <div className={styles.formControl}>
        <label>
          <span className={styles.label}>Enter your confirm password</span>
          <input
            type='password'
            name='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            className={styles.input}
          />
        </label>
        {errors.confirmPassword && touched.confirmPassword ? (
          <span className={styles.error}>{errors.confirmPassword}</span>
        ) : null}
      </div>

      <button type='submit' disabled={isSubmitting} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Signup;
