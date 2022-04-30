import { createSlice } from '@reduxjs/toolkit';
import { generateToken } from './UserAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
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
