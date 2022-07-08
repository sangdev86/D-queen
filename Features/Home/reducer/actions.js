import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';

export const TYPE_HOME = {
  getAllProducts: ACTIONS.get({
    type: 'HOME/getAllProducts',
    api: () => {
      return api.fetchData('/products');
    }
  })
};
