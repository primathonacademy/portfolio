import React from 'react';
import { Formik } from 'formik';
import './style.css';

import { registerUser } from '../../apis';
import { setData } from '../../services/storage';

const Signup = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log(response);
    if (!response.status.error) {
      alert(response.status.message);
    } else {
      alert('Registration failed');
    }

    setData('USER_DATA', response.data);
    setSubmitting(false);
  };

  return (
    <div className='signup-form'>
      <h1 className='my-h1'>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {MyForm}
      </Formik>
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
      <input
        type='text'
        name='firstName'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
        placeholder='Primathon'
      />

      <br />
      <br />

      <input
        type='text'
        name='lastName'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        placeholder='Academy'
      />

      <br />
      <br />

      <label>
        Enter your email
        <br />
        <input
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder='abc@example.com'
        />
      </label>
      <br />
      {errors.email && touched.email && errors.email}

      <br />
      <br />

      <input
        type='password'
        name='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        placeholder='Password'
      />
      <br />
      {errors.password && touched.password && errors.password}
      <br />
      <br />
      <input
        type='password'
        name='confirmPassword'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        placeholder='Confirm Password'
      />
      <br />
      {errors.confirmPassword &&
        touched.confirmPassword &&
        errors.confirmPassword}
      <br />
      <br />
      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Signup;
