import { configureStore } from '@reduxjs/toolkit';
import donatedSlice from './pages/donated/donatedSlice';

const store = configureStore({
  reducer: {
    donated: donatedSlice,
  },
});

export default store;
