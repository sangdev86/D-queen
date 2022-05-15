import { createSlice } from '@reduxjs/toolkit';

export const actionState = {
  notification: {
    open: false,
    status: undefined, // success|error
    message: null,
    ms: 10
  },
  modal: { open: false, data: undefined },
  currentLanguage: 'vie'
};
export const actionSlice = createSlice({
  name: 'ACTIONS',
  initialState: actionState,
  reducers: {
    NOTIFICATION: (state, action) => {
      const { status, message, ms } = action.payload;
      if (message && status) {
        state.notification = {
          open: true,
          status: status,
          message: message,
          ms: ms
        };
      } else {
        state.notification.open = false;
      }
    }
  }
});
