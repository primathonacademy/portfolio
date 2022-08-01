import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

import { loginUser } from '../../apis';
import { setStorageData, USER_DATA } from '../../services/storage';
import Typography from '../../components/Typography';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validator = (values) => {
    const errors = {};

    // email validation
    if (!values.email) {
      errors.email = 'Required';
    } else if (values.email.length < 4) {
      errors.email = 'This is my own error';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // password validation
    if (!values.password) {
      errors.password = 'Please enter a valid password';
    }

    return errors;
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await loginUser(values);
    console.log(response);
    if (!response.status.error) {
      alert(response.status.message);
    } else {
      alert('Registration failed');
    }

    setStorageData(USER_DATA, response.data);
    setSubmitting(false);
  };

  return (
    <div className='signup-form'>
      <Typography className={styles.title} type='H2'>
        Login
      </Typography>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {MyForm}
      </Formik>

      <Link to='/signup'>Please click here to Signup</Link>
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
          <span className={styles.label}> Enter your email</span>
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
          <span className={styles.label}> Enter your email</span>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='Password'
            className={styles.input}
          />
        </label>
        {errors.password && touched.password ? (
          <span className={styles.error}>{errors.password}</span>
        ) : null}
      </div>

      <button type='submit' disabled={isSubmitting} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Login;
