import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './style.css';

const BasicForm = () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

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

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 4000);
  };

  return (
    <div>
      <h1 className='my-h1'>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {/* {MyForm} */}
        {FormikForm}
      </Formik>
    </div>
  );
};

const FormikForm = (props) => {
  const { isSubmitting } = props;

  return (
    <Form>
      <Field type='email' name='email' />
      <ErrorMessage name='email' component='div' />

      <Field type='password' name='password' />
      <ErrorMessage name='password' component='div' />

      <Field type='password' name='confirmPassword' />
      <ErrorMessage name='confirmPassword' component='div' />

      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

const MyForm = (props) => {
  console.log('Props', props);
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
        type='email'
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
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

export default BasicForm;
