import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '../../../../../components/Form';
import { ACTIONS } from '../../../../../components/reducer/actions';
import { TYPE_AUTH } from '../../../reducer/action';

export default function Login() {
  const dispatch = useDispatch();
  const propsForm = {
    body: {
      username: '',
      password: ''
    },
    typeRequest: 'post',
    post: {
      title: 'Đăng nhập Tài Khoản',
      button: 'Đăng Nhập',
      asyncActionForm: [
        {
          bodyAPI: {
            username: { type: 'text' },
            password: { type: 'password' }
          },
          action: TYPE_AUTH.login
        }
      ]
    },
    fetchMainAction: TYPE_AUTH.getAllAdrressUserbyUser
  };
  return (
    <div id="login" className="cs-modal-auth" key="item">
      <Form {...propsForm} />

      <div
        className="navigation"
        onClick={() =>
          dispatch(ACTIONS.changeTypeNoneLogin('REGISTER'))
        }
      >
        Chưa có tài khoản, click để đăng ký!
      </div>
    </div>
  );
}
