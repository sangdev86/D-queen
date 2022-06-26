import axios from 'axios';
import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';
import { productDetailSlice } from './productDetail.slice';
// const { FETCHPRODUCT } = productDetailSlice.actions;
export const TYPE_PRODUCT_DETAIL = {
  getProductDetail: ACTIONS.get({
    type: 'getProductDetail',
    api: () => {
      return api.fetchData('/products');
    }
  })
};
