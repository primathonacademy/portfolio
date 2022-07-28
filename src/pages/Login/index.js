import React from 'react';
import { Formik, Field, Form } from 'formik';

// const Login = () => {
//   const formInitialValue = {
//     firstName: '',
//     lastName: '',
//     email: '',
//   };

//   const validator = (values) => {
//     console.log('values', values);

//     const errors = {};

//     return errors;
//   };

//   const onSubmit = (values, { setSubmitting }) => {
//     console.log('values', values, { setSubmitting });

//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

//   return (
//     <Formik
//       initialValues={formInitialValue}
//       validate={validator}
//       onSubmit={onSubmit}
//     >
//       <Form>
//         <label style={{ display: 'block' }}>
//           <span>First Name</span>
//           <Field name='firstName' placeholder='Jane' />
//         </label>

//         <label style={{ display: 'block' }}>
//           <span>Last Name</span>
//           <Field name='lastName' placeholder='Doe' />
//         </label>

//         <label style={{ display: 'block' }}>
//           <span>Email</span>
//           <Field name='email' placeholder='jane@acme.com' type='email' />
//         </label>

//         <button type='submit'>Submit</button>
//       </Form>
//     </Formik>
//   );
// };

const Login = () => {
  return <h2>Login</h2>;
};

export default Login;
