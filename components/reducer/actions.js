import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { actionSlice } from './actions.slice';

const { NOTIFICATION, MODAL, CHANGETYPE, LOADINGPAGE } =
  actionSlice.actions;

export const ACTIONS = {
  ntf:
    (status = null, message = null, ms = 0) =>
    (dispatch) =>
      dispatch(
        NOTIFICATION({
          status: status,
          message: message,
          ms: ms
        })
      ),
  modal:
    (open = true, data = null) =>
    (dispatch) => {
      dispatch(MODAL({ open: open, data: data }));
    },

  changeTypeNoneLogin: (type) => (dispatch) =>
    dispatch(CHANGETYPE(type)),
  loadingPage: (agr) => (dispatch) => dispatch(LOADINGPAGE(agr)),

  // Async action
  createAction: (action) =>
    createAsyncThunk(action.type, (payload) => {
      return payload;
    }),
  fetchAddressVN: createAsyncThunk(
    'ACTION/getAllAddress',
    async () => {
      try {
        const res = await axios.get(
          'https://provinces.open-api.vn/api/?depth=3'
        );

        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  ),
  get: (action) =>
    createAsyncThunk(action.type, async (params, thunkAPI) => {
      const { api } = action;

      try {
        const response = await api(params);
        if (
          response.code >= 200 &&
          response.code < 300 &&
          response.message === 'success'
        ) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue({});
        }
      } catch (e) {
        return thunkAPI.rejectWithValue({});
      }
    }),
  post: (action) =>
    createAsyncThunk(action.type, async (body, thunkAPI) => {
      const { api } = action;
      console.log('vao post', body);
      try {
        const response = await api(body);

        if (
          response.code >= 200 &&
          response.code < 300 &&
          response.message === 'success'
        ) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue({});
        }
      } catch (e) {
        return thunkAPI.rejectWithValue({});
      }
    }),
  del: (action) =>
    createAsyncThunk(action.type, async (params, thunkAPI) => {
      const { api } = action;

      try {
        const response = await api(params);

        if (
          response.code >= 200 &&
          response.code < 300 &&
          response.message === 'success'
        ) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue({});
        }
      } catch (e) {
        return thunkAPI.rejectWithValue({});
      }
    }),
  del_body: (action) =>
    createAsyncThunk(action.type, async (params, thunkAPI) => {
      const { api } = action;
      // console.log('params', params);
      try {
        const response = await api(params);

        if (
          response.code >= 200 &&
          response.code < 300 &&
          response.message === 'success'
        ) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue({});
        }
      } catch (e) {
        return thunkAPI.rejectWithValue({});
      }
    })
};
