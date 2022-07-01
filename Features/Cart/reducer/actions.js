import { ACTIONS } from '../../../components/reducer/actions';

export const TYPE_CART = {
  renderBill: ACTIONS.createAction({
    type: 'cart/RENDER_BILL',
    data: (data) => data
  })
};
