import { createSlice } from '@reduxjs/toolkit';

import { TYPE_PRODUCT_DETAIL } from './actions';

const { getProductDetail } = TYPE_PRODUCT_DETAIL;
export const productDetailState = {
  loading: false,
  product: null
};

export const productDetailSlice = createSlice({
  name: 'PRODUCTDETAIL',
  initialState: productDetailState,
  reducers: {
    // FETCHPRODUCT: (state, action) => {
    //   console.log('FETCHPRODUCT');
    //   state.product = action.payload;
    // }
  },
  extraReducers: {
    // const { getProductDetail } = TYPE_PRODUCT_DETAIL;
    // const { get } = ACTIONS;
    // builder
    //   .addCase(get(getProductDetail).pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(get(getProductDetail).fulfilled, (state) => {
    //     state.loading = false;
    //     state.product = action.payload;
    //   })
    //   .addCase(get(getProductDetail).rejected, (state) => {
    //     state.loading = false;
    //   });
    [getProductDetail.pending]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [getProductDetail.rejected]: (state) => {
      state.loading = false;
    }
  }
});
