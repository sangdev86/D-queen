import React from 'react';
import { useSelector } from 'react-redux';
import { checkLogin } from '../../../Assets/utils/local';
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
