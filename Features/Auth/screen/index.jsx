import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkLogin, LOCAL } from '../../../Assets/utils/local';
import NoneProfile from './NoneProfile';
import Profile from './Profile';

export default function Auth() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div id="auth">
      {isLogin && checkLogin() ? <Profile /> : <NoneProfile />}
    </div>
  );
}
