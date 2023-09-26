import { configureStore } from '@reduxjs/toolkit';
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
import { authReducer } from './auth/authSlice';
import { questionApi } from './question/questionApi';
import { topicApi } from './topic/topicApi';

import { setupListeners } from '@reduxjs/toolkit/query';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [topicApi.reducerPath]: topicApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    questionApi.middleware,
    topicApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
