import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';

export const TYPE_PRODUCT_DETAIL = {
  getProductDetail: ACTIONS.get({
    type: 'getProductDetail',
    api: () => {
      return api.fetchData('/products');
    }
  })
};
