import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '../../../../../components/Form';
import { ACTIONS } from '../../../../../components/reducer/actions';
import { TYPE_PRODUCT_DETAIL } from '../../../../ProductDetail/reducer/actions';
import { TYPE_AUTH } from '../../../reducer/action';

export default function Register() {
  const dispatch = useDispatch();
  const propsForm = {
    body: {
      name: '',
      email: '',
      phoneNumber: '',
      password: ''
    },
    typeRequest: 'post',
    post: {
      title: 'Tạo Tài Khoản',
      button: 'Đăng ký',
      asyncActionForm: [
        {
          bodyAPI: {
            name: { type: 'text' },
            email: { type: 'text' },
            phoneNumber: { type: 'text' },
            password: 'password'
          },
          action: TYPE_AUTH.register
        }
      ]
    },
    fetchMainAction: TYPE_PRODUCT_DETAIL.getProductDetail()
  };
  return (
    <div id="register">
      <Form {...propsForm} />
      <div
        className="navigation"
        onClick={() => dispatch(ACTIONS.changeTypeNoneLogin('LOGIN'))}
      >
        Đã có tài khoản, click để đăng nhập!
      </div>
    </div>
  );
}
