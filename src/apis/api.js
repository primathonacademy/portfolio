const HOST_NAME = 'http://127.0.0.1:8000/';

const HEADERS = {
  'Content-Type': 'application/json',
};

const getParams = (params) => {
  if (!!params && typeof params === 'object' && params !== null) {
    return (
      '?' +
      Object.keys(params)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
    );
  } else {
    return '';
  }
};

const callApi = (method, headers = null, body = null, queryParams = null) => {
  const newUrl = queryParams
    ? `${HOST_NAME}${getParams(queryParams)}`
    : `${HOST_NAME}`;

  const options = {
    method,
    headers: {
      ...HEADERS,
    },
  };

  if (headers) {
    options.headers = {
      ...options.headers,
      ...headers,
    };
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(newUrl, options).then(
    (response) => response.json(),
    (err) => console.error('err', err)
  );
};

export default callApi;
