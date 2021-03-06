import { createSlice } from '@reduxjs/toolkit';
import { getAddressVN, setAddressVN } from '../../Assets/utils/local';

export const actionState = {
  notification: {
    status: null,
    message: null,
    ms: 5000
  },
  modal: { open: false, data: null },
  currentLanguage: 'vie',
  typeNoneLogin: 'LOGIN',
  loadingPage: false,
  allAddressVN: null
};
export const actionSlice = createSlice({
  name: 'ACTIONS',
  initialState: actionState,
  reducers: {
    NOTIFICATION: (state, action) => {
      const { status, message, ms } = action.payload;
      if (message && status) {
        state.notification = {
          status: status,
          message: message,
          ms: ms
        };
      } else {
        state.notification.status = false;
      }
    },
    MODAL: (state, action) => {
      const { open, data } = action.payload;
      if (open && data !== null) {
        state.modal = action.payload;
      } else {
        state.modal = {
          open: false,
          data: null
        };
      }
    },
    CHANGETYPE: (state, action) => {
      if (action.payload !== undefined) {
        state.typeNoneLogin = action.payload;
      }
    },
    LOADINGPAGE: (state, action) => {
      if (action.payload !== undefined) {
        state.loadingPage = action.payload;
      }
    }
  },
  extraReducers: {
    ['ACTION/getAllAddress/fulfilled']: (state, action) => {
      state.allAddressVN = action.payload;
      setAddressVN(action.payload);
    }
  }
});
