import { createSlice } from '@reduxjs/toolkit';

export const messageListSlice = createSlice({
  name: 'messageList',
  initialState: {
    list: []
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMessage: (state, action) => {
        state.list.push({ ...action.payload, timestamp: Date.now() });
    }
  }
});

export const { addMessage } = messageListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMessages = (state) => state.messageList.list;

export default messageListSlice.reducer;
