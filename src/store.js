import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import donatedSlice from './pages/Donated/donatedSlice';
import requestsSlice from './pages/Request/requestSlice';
import userReducer from './utils/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['donated', 'requestedItems'],
};

const rootReducer = combineReducers({
  user: userReducer,
  donated: donatedSlice,
  requestedItems: requestsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
