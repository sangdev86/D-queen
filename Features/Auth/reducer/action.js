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
      // console.log('body', body);
      return api.fetchData('/login', 'POST', body);
    }
  }),
  logout: ACTIONS.del_body({
    type: 'AUTH/logout',
    api: (body) => {
      // console.log('body', body);
      return api.fetchData('/logout', 'DELETE', body);
    }
  }),
  getAllAdrressUserbyUser: ACTIONS.get({
    type: 'AUTH/getAllAdrressUserbyUser',
    api: () => {
      return api.fetchData('/address/book');
    }
  }),
  addNewAddressbyUser: ACTIONS.post({
    type: 'AUTH/addNewAddressUser',
    api: (body) => {
      // let bodyupdate = { ...body };
      // bodyupdate.provinceCode = parseInt(bodyupdate.provinceCode);
      // bodyupdate.districtCode = parseInt(bodyupdate.districtCode);
      // bodyupdate.wardCode = parseInt(bodyupdate.wardCode);
      // console.log('bodyupdate', bodyupdate);
      return api.fetchData('/address/add', 'POST', body);
    }
  }),
  delAddress: ACTIONS.del({
    type: 'AUTH/delAddressbyUser',
    api: (id) => api.fetchData(`/address/${id}`, 'DELETE')
  })
};
