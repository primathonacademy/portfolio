import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import styles from '../Login/style.module.css';

import { resetUserPassword } from '../../apis';
import Typography from '../../components/Typography';
import { toastSuccess, toastError } from '../../services/toastify';

const ResetPassword = () => {
  const [password, setPassword] = useState();

  const initialValues = {
    email: '',
  };

  const validator = (values) => {
    const errors = {};

    // email validation
    if (!values.email) {
      errors.email = 'Please enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
    return errors;
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await resetUserPassword(values);
    if (!response.status.error) {
      toastSuccess(response.status.message);
      // Update State Variable
      setPassword(response.data.password);
    } else {
      toastError(response.status.message);
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.form}>
      <Typography className={styles.title} type='H2'>
        Reset Password
      </Typography>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {MyForm}
      </Formik>

      {password ? (
        <div className={styles.pageLink}>Your Password : {password}</div>
      ) : null}

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

      <button type='submit' disabled={isSubmitting} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
