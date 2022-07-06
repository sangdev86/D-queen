import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../../../Assets/utils/local';
import { TYPE_AUTH } from '../reducer/action';
import NoneProfile from './NoneProfile';
import Profile from './Profile';

export default function Auth() {
  console.log('Loading comoponent: AUTH');

  const isLogin = useSelector((state) => state.auth.isLogin);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLogin) {
      dispatch(TYPE_AUTH.getAllAdrressUserbyUser());
    }
  }, []);

  return (
    <div id="auth" key="item">
      <div className="auth-wrapper">
        {isLogin && checkLogin() ? <Profile /> : <NoneProfile />}
      </div>
    </div>
  );
}
