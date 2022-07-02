import { createSlice } from '@reduxjs/toolkit';
import {
  checkLogin,
  LOCAL,
  userLogin
} from '../../../Assets/utils/local';
import { TYPE_AUTH } from './action';
const { login } = TYPE_AUTH;

export const authState = {
  isLogin: checkLogin(),
  userLogin: userLogin(),
  loadingLogin: false
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState: authState,
  reducers: {
    LOGOUT: (state) => {
      LOCAL.logout();
      state.isLogin = false;
      state.userLogin = null;
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loadingLogin = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.userLogin = action.payload.user;
      state.loadingLogin = false;
      LOCAL.setToken(action.payload.token);
      LOCAL.setUser(action.payload.user);
    },
    [login.rejected]: (state) => {
      state.loadingLogin = false;
    }
  }
});
