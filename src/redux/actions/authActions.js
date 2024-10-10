// authActions.js
import { persistor } from '../store';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/', credentials);
    dispatch(loginSuccess(response.data)); 
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export const handleLogout = () => (dispatch) => {
  dispatch(logout());
  persistor.purge(); // Clear the persisted state on logout
};