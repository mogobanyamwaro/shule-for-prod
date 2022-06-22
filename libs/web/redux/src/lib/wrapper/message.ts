import { createSlice } from '@reduxjs/toolkit';
const initialState = {};
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state: any, action: any) => {
      return {
        message: action.payload,
      };
    },
    clearMessage: (state: any, action: any) => {
      return { message: '' };
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions;

export default reducer;
