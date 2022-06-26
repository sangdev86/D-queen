import { LOCAL } from '../../../Assets/utils/local';
import { ACTIONS } from '../../../components/reducer/actions';
import api from '../../../services/client';
import { authSlice } from './auth.slice';

export const TYPE_AUTH = {
  register: ACTIONS.post({
    type: 'AUTH/register',
    api: (body) => {
      // console.log('body register', body);
      return api.fetchData('/users/register', 'POST', body);
    }
  }),
  login: ACTIONS.post({
    type: 'AUTH/login',
    api: (body) => {
      console.log('body', body);
      return api.fetchData('/users/login', 'POST', body);
    }
  }),
  logout: (dispatch) => {
    dispatch({ type: 'AUTH/logout' });
  }
};
