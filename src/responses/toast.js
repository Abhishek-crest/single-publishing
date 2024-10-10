import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';

function capitalizeMessage(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const successToast = (message) => {
  toast.success(capitalizeMessage(message), {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    className: 'toast',
  });
};

export const errorToast = (message) => {
  toast.error(capitalizeMessage(message), {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    className: 'toast',
  });
};
