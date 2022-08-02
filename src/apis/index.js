const generateToken = () => {
  return (
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2)
  );
};

const generateId = () => {
  return Math.random().toString().slice(2); // remove `0.`
};

const later = (value) =>
  new Promise((resolve) => setTimeout(resolve, 400, value));

let USER_DATA = [
  {
    email: 'ramvishvas.kumar@primathon.in',
    lastName: 'Kumar',
    firstName: 'Ramvishvas',
    password: '123456',
    id: generateId(),
    token: generateToken(),
  },
];

// Api ........................................................................
export const registerUser = async (payload) => {
  const isAlreadyRegistered = USER_DATA.find(
    (user) => user.email === payload.email
  );

  let responsePayload;

  if (isAlreadyRegistered) {
    responsePayload = {
      status: {
        type: 'error',
        code: 401,
        message: 'User Already Registered',
        error: true,
      },
      data: null,
    };
  } else {
    const data = {
      email: payload.email,
      lastName: payload.lastName,
      firstName: payload.firstName,
      id: generateId(),
      token: generateToken(),
    };

    responsePayload = {
      status: {
        type: 'success',
        code: 200,
        message: 'Registration Successful',
        error: false,
      },
      data,
    };

    USER_DATA.push({ ...data, password: payload.password });
  }

  try {
    return await later(responsePayload);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};

export const loginUser = async (payload) => {
  const user = USER_DATA.find((user) => user.email === payload.email);

  let responsePayload;

  if (!user) {
    responsePayload = {
      status: {
        type: 'error',
        code: 404,
        message: 'User does not exist',
        error: true,
      },
      data: null,
    };
  } else {
    if (payload.email === user.email && payload.password === user.password) {
      responsePayload = {
        status: {
          type: 'success',
          code: 200,
          message: 'Login Successful',
          error: false,
        },
        data: {
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName,
          id: user.id,
          token: user.token,
        },
      };
    } else {
      responsePayload = {
        status: {
          type: 'error',
          code: 401,
          message: 'Email or password is incorrect',
          error: true,
        },
        data: null,
      };
    }
  }

  try {
    return await later(responsePayload);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};

export const logoutUser = async (payload) => {
  let responsePayload;

  const user = USER_DATA.find((user) => user.token === payload.token);

  if (!user || payload.token === user.token) {
    responsePayload = {
      status: {
        type: 'error',
        code: 401,
        message: 'Failed to logout. Invalid token',
        error: true,
      },
      data: null,
    };
  } else {
    responsePayload = {
      status: {
        type: 'success',
        code: 200,
        message: 'Logout Successful',
        error: false,
      },
      data: null,
    };
  }
  try {
    return await later(responsePayload);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};

export const resetUserPassword = async (payload) => {
  const user = USER_DATA.find((user) => user.email === payload.email);

  let responsePayload;

  if (!user || payload.email !== user.email) {
    responsePayload = {
      status: {
        type: 'error',
        code: 404,
        message: 'User does not exist',
        error: true,
      },
      data: null,
    };
  } else {
    responsePayload = {
      status: {
        type: 'success',
        code: 200,
        message: 'Reset Successful',
        error: false,
      },
      data: {
        email: user.email,
        lastName: user.lastName,
        firstName: user.firstName,
        password: user.password,
        id: user.id,
        token: user.token,
      },
    };
  }

  try {
    return await later(responsePayload);
  } catch (error) {
    console.error(error);
    return responsePayload;
  }
};
