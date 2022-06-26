import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';

export default function NoneProfile() {
  const typeNoneLogin = useSelector(
    (state) => state.actions.typeNoneLogin
  );

  return (
    <div id="none-profile">
      {(() => {
        switch (typeNoneLogin) {
          case 'LOGIN':
            return <Login />;
          case 'REGISTER':
            return <Register />;
          default:
            break;
        }
      })()}
    </div>
  );
}
