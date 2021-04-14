import { configureStore } from '@reduxjs/toolkit';
import messageListReducer from './messageList/messageListSlice';

export const store = configureStore({
  reducer: {
    messageList: messageListReducer
  },
});
