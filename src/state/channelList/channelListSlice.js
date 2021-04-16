import { createSlice } from '@reduxjs/toolkit';

export const channelListSlice = createSlice({
  name: 'channelList',
  initialState: {
    currentChannelId: '507f1f77bcf86cd799439011',
    channelList: [
      {
        name: '#basic',
        id: '507f1f77bcf86cd799439011',
        messageList: []
      }
    ]
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addChannel: (state, action) => {
      let newChannelObj = { name: action.payload.channelName, id: action.payload.channelId, messageList: [] };
      state.channelList.push(newChannelObj);
      state.currentChannelId = action.payload.channelId;
    },
    addMessageToChannel: (state, action) => {
      let channel = state.channelList.find(u => u.id === action.payload.channelId);
      channel.messageList.push({ ...action.payload, timestamp: Date.now() })
    },
    changeCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload;
    }
  }
});

export const { addChannel, addMessageToChannel, changeCurrentChannelId } = channelListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectChannel = (state) => state.channelList.channelList;
export const selectCurrentChannelId = (state) => state.channelList.currentChannelId;

export default channelListSlice.reducer;
