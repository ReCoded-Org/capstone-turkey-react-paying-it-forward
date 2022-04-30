import { configureStore } from '@reduxjs/toolkit';
import donatedSlice from './pages/Donated/donatedSlice';
import requestsSlice from './pages/Request/requestSlice';

const store = configureStore({
  reducer: {
    donated: donatedSlice,
    requestedItems: requestsSlice
  },
});

export default store;
