import { LOCAL } from '../../../Assets/utils/local';
import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';

export const TYPE_AUTH = {
  register: ACTIONS.post({
    type: 'AUTH/register',
    api: (body) => {
      // console.log('body register', body);
      return api.fetchData('/register', 'POST', body);
    }
  }),
  login: ACTIONS.post({
    type: 'AUTH/login',
    api: (body) => {
      console.log('body', body);
      return api.fetchData('/login', 'POST', body);
    }
  }),
  logout: (dispatch) => {
    dispatch({ type: 'AUTH/logout' });
  }
};
