import React from 'react';
import { useDispatch } from 'react-redux';
import { getAddressVN } from '../../Assets/utils/local';
import { TYPE_AUTH } from '../../Features/Auth/reducer/action';
import Form from '../Form';
import { ACTIONS } from '../reducer/actions';

export default function Address() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (getAddressVN() === null) {
      dispatch(ACTIONS.fetchAddressVN());
    }
  }, []);
  const propsForm = {
    body: {
      receiver: '',
      receiverPhone: '',
      provinceCode: '',
      districtCode: '',
      wardCode: '',
      detail: ''
    },
    typeRequest: 'post',
    post: {
      title: 'Thêm địa chỉ mới',
      button: 'Thêm mới',
      asyncActionForm: [
        {
          bodyAPI: {
            receiver: 'text',
            receiverPhone: 'text',
            provinceCode: 'select_address',
            districtCode: 'select_address',
            wardCode: 'select_address',
            detail: 'text'
          },
          action: TYPE_AUTH.addNewAddressbyUser
        }
      ]
    }
  };
  return (
    <div id="address">
      <Form {...propsForm} />
    </div>
  );
}
