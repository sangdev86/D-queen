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
  }),
  action: () => api.fetchData('/products'),
  test: () => async (dispatch) => {
    const res = await api.fetchData(
      'QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    );
    // const data = JSON.parse(res);
    console.log('res', res);
    // dispatch(FETCHPRODUCT(res));
  }
};
