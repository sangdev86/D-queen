import { createSlice } from '@reduxjs/toolkit';
import { TYPE_CART } from './actions';
const { renderBill } = TYPE_CART;
export const cartState = {
  bill: null,
  loading: false
};

export const cartSlice = createSlice({
  name: 'CART',
  initialState: cartState,
  reducers: {},
  extraReducers: {
    [renderBill]: (state) => {
      state.loading = true;
    },
    [renderBill.fulfilled]: (state, action) => {
      state.loading = false;
      state.bill = action.payload;
    }
  }
});
