import { configureStore } from '@reduxjs/toolkit';
import donatedSlice from './pages/Donated/donatedSlice';

const store = configureStore({
  reducer: {
    donated: donatedSlice,
  },
});

export default store;
