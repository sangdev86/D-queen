import { createSlice } from '@reduxjs/toolkit';
import { TYPE_PRODUCT_DETAIL } from './actions';

const { getProductDetail, getProduct } = TYPE_PRODUCT_DETAIL;
export const productDetailState = {
  loading: false,
  product: null,
  productDetail: null
};

export const productDetailSlice = createSlice({
  name: 'PRODUCTDETAIL',
  initialState: productDetailState,
  reducers: {},
  extraReducers: {
    // [getProduct.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getProduct.fulfilled]: (state, action) => {
    //   state.product = action.payload;
    //   state.loading = false;
    // },
    // [getProduct.rejected]: (state) => {
    //   state.loading = false;
    // },
    [getProductDetail.pending]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.productDetail = action.payload;
      state.loading = false;
    },
    [getProductDetail.rejected]: (state) => {
      state.loading = false;
    }
  }
});
