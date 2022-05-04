import { createSlice } from '@reduxjs/toolkit';
import sign from 'jwt-encode';

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

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      _id: '625afbf7ed3c326017ee91ce',
      username: 'anne.adams1',
      email: 'annadams_test@gmail.com',
      firstName: 'AdamTT',
      lastName: 'Adams',
      address: '425 Main Street, California, 10457',
      isDonator: false,
    },
    isLoading: false,
    isSuccessLogin: false,
    isSuccessRegister: false,
    isError: false,
    token: null,
  },

  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccessLogin = false;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccessLogin = true;
      state.token = generateToken(state.currentUser);
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccessLogin = false;
    },
    registerStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccessRegister = false;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccessRegister = true;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccessRegister = false;
    },
    loginOut: (state) => {
      state.isSuccessLogin = false;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;

export default userSlice.reducer;
