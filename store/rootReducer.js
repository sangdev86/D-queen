import {
  actionSlice,
  actionState
} from '../components/reducer/actions.slice';
import {
  authSlice,
  authState
} from '../Features/Auth/reducer/auth.slice';
import { cartSlice } from '../Features/Cart/reducer/cart.slice';
import { homeSlice } from '../Features/Home/reducer/home.slice';
import {
  productDetailSlice,
  productDetailState
} from '../Features/ProductDetail/reducer/productDetail.slice';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  actions: actionSlice.reducer,
  productDetail: productDetailSlice.reducer,
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  home: homeSlice.reducer
});
export default rootReducer;

// comment line
export const storeState = {
  actions: actionState,
  productDetail: productDetailState,
  auth: authState
};

export const mapStateToProps = (state = storeState) => {
  return {
    store: state,
    actions: state.actions
  };
};
