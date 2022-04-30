import axios from 'axios';
import { toast } from 'react-toastify';
import sign from 'jwt-encode';

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userSlice';

const showErrorMessage = (error) => {
  // error message is in arrray or direct value in BE.
  let errorMessage = error.response.data[0]
    ? error.response.data[0].msg
    : error.response.data.message;

  errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const generateToken = (currentUser) => {
  const payload = {
    user: {
      username: currentUser.username,
      email: currentUser.email,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      _id: currentUser._id,
    },
    iat: Math.floor(new Date().getTime() / 1000),
    exp: Math.floor(new Date().getTime() / 1000) + 1209600,
    sub: currentUser._id,
  };

  const token = sign(payload, process.env.REACT_APP_JWT_SECRET);

  return token;
};

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'https://payingitforward.re-coded.com/api/auth/signin',
      user,
    );

    dispatch(loginSuccess());
  } catch (error) {
    console.log(error);
    showErrorMessage(error);
    dispatch(loginFailure());
  }
};

const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      'https://payingitforward.re-coded.com/api/auth/signup',
      user,
    );

    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    showErrorMessage(error);
    dispatch(registerFailure());
  }
};
export { login, register, generateToken };
