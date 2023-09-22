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
import { topicSlice } from './topic/topicSlice';
import { questionSlice } from './question/questionSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { questionApi } from './question/questionApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    topic: topicSlice.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
    // question: questionSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    questionApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
