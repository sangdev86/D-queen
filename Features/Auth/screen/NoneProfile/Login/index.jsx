import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../../../components/Form';
import Loading from '../../../../../components/Loading';
import { ACTIONS } from '../../../../../components/reducer/actions';
import { TYPE_PRODUCT_DETAIL } from '../../../../ProductDetail/reducer/actions';
import { TYPE_AUTH } from '../../../reducer/action';

export default function Login() {
  const dispatch = useDispatch();
  const loadingLogin = useSelector(
    (state) => state.auth.loadingLogin
  );
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
    fetchMainAction: TYPE_PRODUCT_DETAIL.getProductDetail()
  };
  return (
    <Loading loadingComponent={loadingLogin}>
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
    </Loading>
  );
}
