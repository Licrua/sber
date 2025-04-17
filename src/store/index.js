import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import commentsReducer from './slices/commentsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    comments: commentsReducer,
  },
});
