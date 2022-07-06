import { createSlice } from '@reduxjs/toolkit';
import {
  checkLogin,
  LOCAL,
  userLogin
} from '../../../Assets/utils/local';
import { TYPE_AUTH } from './action';
const {
  login,
  logout,
  getAllAdrressUserbyUser,
  addNewAddressbyUser,
  delAddress
} = TYPE_AUTH;

export const authState = {
  isLogin: checkLogin(),
  userLogin: userLogin(),
  addressUser: [],
  loadingAuth: false
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
      state.loadingAuth = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.userLogin = action.payload.user;
      state.loadingAuth = false;
      LOCAL.setToken(action.payload.token);
      LOCAL.setUser(action.payload.user);
    },
    [login.rejected]: (state) => {
      state.loadingAuth = false;
    },
    [logout.pending]: (state) => {
      state.loadingAuth = true;
    },
    [logout.fulfilled]: (state) => {
      LOCAL.logout();
      state.isLogin = false;
      state.userLogin = null;
      state.loadingAuth = false;
    },
    [logout.rejected]: (state) => {
      state.loadingAuth = false;
    },
    [getAllAdrressUserbyUser.pending]: (state) => {
      state.loadingAuth = true;
    },
    [getAllAdrressUserbyUser.fulfilled]: (state, action) => {
      state.loadingAuth = false;
      state.addressUser = action.payload;
    },
    [getAllAdrressUserbyUser.rejected]: (state) => {
      state.loadingAuth = false;
      state.addressUser = [];
    },
    [addNewAddressbyUser.pending]: (state) => {
      state.loadingAuth = true;
    },
    [addNewAddressbyUser.fulfilled]: (state) => {
      state.loadingAuth = false;
    },
    [addNewAddressbyUser.rejected]: (state) => {
      state.loadingAuth = false;
    }
    // [delAddress.pending]: (state) => {
    //   state.loadingAuth = true;
    // },
    // [delAddress.fulfilled]: (state) => {
    //   state.loadingAuth = false;
    // },
    // [delAddress.rejected]: (state) => {
    //   state.loadingAuth = false;
    // }
  }
});
