import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL } from '../../../../Assets/utils/local';
import Form from '../../../../components/Form';
import { TYPE_AUTH } from '../../reducer/action';
import { authSlice } from '../../reducer/auth.slice';
const { LOGOUT } = authSlice.actions;
export default function Profile() {
  const userLogin = useSelector((state) => state.auth.userLogin);
  const dispatch = useDispatch();

  const propsForm = {
    body: userLogin,
    typeRequest: 'post',
    post: {
      title: 'Thông tin khách hàng',
      button: 'Cập nhật',
      asyncActionForm: [
        {
          bodyAPI: {
            name: 'text',
            email: 'text',
            phoneNumber: 'text',

            address: {
              type: 'select',
              sub: [
                { id: '1', name: 'THPHCM' },
                { id: '2', name: 'Bình Dương' }
              ],
              name: 'name'
            }
          },
          action: TYPE_AUTH.login
        }
      ]
    }
  };
  return (
    <div id="profile" className="cs-modal-auth">
      <Form {...propsForm} />
      <div className="navigation" onClick={() => dispatch(LOGOUT())}>
        Đăng xuất
      </div>
    </div>
  );
}
