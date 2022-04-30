import { configureStore } from '@reduxjs/toolkit';
import requestsSlice from './pages/Request/requestSlice';

const store = configureStore({
  reducer: {
    requestedItems: requestsSlice,
  },
});

export default store;
