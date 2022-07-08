import { createSlice } from '@reduxjs/toolkit';
import { TYPE_HOME } from './actions';
const { getAllProducts } = TYPE_HOME;
export const homeState = {
  allProducts: null,
  loadingHome: false
};
export const homeSlice = createSlice({
  name: 'HOME',
  initialState: homeState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loadingHome = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loadingHome = false;
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.loadingHome = false;
    }
  }
});
