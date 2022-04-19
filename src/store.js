import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './pages/Request/requestSlice';

const store = configureStore({
  reducer: {
    request: requestSlice,
  },
});

export default store;
