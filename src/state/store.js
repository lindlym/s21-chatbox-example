import { configureStore } from '@reduxjs/toolkit';
import channelListReducer from './channelList/channelListSlice';

export const store = configureStore({
  reducer: {
    channelList: channelListReducer
  },
});
