let USER_DATA = {};

export const registerUser = (payload) => {
  // setTimeout(() => {
  USER_DATA = {
    email: payload.email,
    lastName: payload.lastName,
    firstName: payload.firstName,
    password: payload.password,
    confirmPassword: payload.confirmPassword,
    id: Math.random().toString().slice(2),
    token: 'xx5x2x91331x3x3x341xx51176x7xxx182x65xxx',
  };

  return Promise.resolve({
    status: {
      type: 'success',
      code: 200,
      message: 'Registration Successful',
      error: false,
    },
    data: {
      ...USER_DATA,
    },
  });
  // }, 300);
};

export const loginUser = (payload) => {
  setTimeout(() => {
    if (
      payload.email === USER_DATA.email &&
      payload.password === USER_DATA.password
    ) {
      return {
        status: {
          type: 'success',
          code: 200,
          message: 'Login Successful',
          error: false,
        },
        data: {
          ...USER_DATA,
        },
      };
    } else {
      return {
        status: {
          type: 'error',
          code: 401,
          message: 'Email or password are incorrect',
          error: true,
        },
        data: null,
      };
    }
  }, 300);
};

export const logoutUser = (payload) => {
  setTimeout(() => {
    if (payload.token === USER_DATA.token) {
      return {
        status: {
          type: 'success',
          code: 200,
          message: 'Logout Successful',
          error: false,
        },
      };
    } else {
      return {
        status: {
          type: 'error',
          code: 402,
          message: 'Failed to logout',
          error: true,
        },
      };
    }
  }, 300);
};
