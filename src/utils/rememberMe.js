const STORAGE_NAME = 'singlePublishing';

export const setRememberMeStorage = (payload) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(payload));
};

export const getRememberMeStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME));
};

export const removeRememberMeStorage = () => {
  localStorage.removeItem(STORAGE_NAME);
};
