import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionSlice } from './actions.slice';

const { NOTIFICATION, MODAL } = actionSlice.actions;

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
          return response;
        } else {
          return thunkAPI.rejectWithValue({});
        }
      } catch (e) {
        return thunkAPI.rejectWithValue({});
      }
    })
};
