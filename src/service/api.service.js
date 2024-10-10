import axios from 'axios';
import getToken from '../utils/token';
import { errorToast } from '../responses/successToast';

const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

AXIOS.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
AXIOS.defaults.headers.post['Content-Type'] = 'application/json';

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error.response.data);
  }
);

export const getRequest = async (url, params = {}) => {
  return new Promise((resolve, reject) => {
    const reqParams = {
      ...params,
    };

    // if (reqParams) {
    AXIOS.get(url, {
      params: reqParams,
    })
      .then((result) => resolve(result))
      .catch((error) => errorToast(error?.response?.data?.message));
    // } else {
    //     AXIOS.get(url)
    //         .then(result => resolve(result))
    //         .catch(error => reject(error.response.data));
    // }
  });
};

export const postRequest = async (url, body = {}) => {
  return new Promise((resolve, reject) => {
    const bodyData = {
      ...body,
    };

    AXIOS.post(url, { ...bodyData })
      .then((result) => resolve(result))
      .catch((error) => reject(error.response.data));
  });
};

export const deleteRequest = async (url) => {
  return new Promise((resolve, reject) => {
    const data = {};

    AXIOS.delete(url, { ...data })
      .then((result) => resolve(result))
      .catch((error) => reject(error.response.data));
  });
};

export const patchRequest = async (url, body = {}) => {
  return new Promise((resolve, reject) => {
    const bodyData = {
      ...body,
    };

    AXIOS.patch(url, { ...bodyData })
      .then((result) => resolve(result))
      .catch((error) => reject(error.response.data));
  });
};
