import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';

export const TYPE_PRODUCT_DETAIL = {
  getProduct: ACTIONS.get({
    type: 'getProductDetail',
    api: () => {
      return api.fetchData('/products');
    }
  }),
  getProductDetail: ACTIONS.get({
    type: 'getProductDetail',
    api: (id) => {
      return api.fetchData(`/products/${id}`);
    }
  }),

  getAllSlugOfProducts: async () => {
    try {
      const properties = await api.fetchData('/products');
      const paths = properties.data.map((item) => {
        return {
          params: { id: item._id }
        };
      });
      return { paths, fallback: false };
    } catch (er) {
      console.error(er);
      return { paths: [], fallback: false }; // <- ADDED RETURN STMNT
    }
  }
};
