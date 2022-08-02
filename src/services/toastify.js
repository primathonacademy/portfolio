import { toast } from 'react-toastify';

const options = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastInfo = (text) => {
  toast.info(text, options);
};

export const toastSuccess = (text) => {
  toast.success(text, options);
};

export const toastWarning = (text) => {
  toast.warning(text, options);
};

export const toastError = (text) => {
  toast.error(text, options);
};

export const toastDefault = (text) => {
  toast(text, options);
};
