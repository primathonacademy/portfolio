// Storage Variable Name
export const USER_DATA = 'user_data';

export const setStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeStorageData = (key) => {
  localStorage.removeItem(key);
};

export const clearStorageData = () => {
  localStorage.clear();
};
