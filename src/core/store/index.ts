import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Feedback from '../middlewares/Feedback';
import AuthSlice from './slices/auth/slice.auth';
import FeedbackSlice from './slices/feedback/slice.feedback';

const rootReducer = combineReducers({
  feedback: FeedbackSlice.reducer,
  auth: AuthSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Feedback),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
