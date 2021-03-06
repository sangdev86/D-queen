import React from 'react';

import Navigation from './Navigation';
import Search from './Search';
import HeaderAccount from './HeaderAccount';

import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../components/reducer/actions';

import Infomation from './Infomation';
import { TYPE_MODAL } from './Infomation/infomationData';
import { FaOpencart } from 'react-icons/fa';
import { LOCAL } from '../../Assets/utils/local';
import { authSlice } from '../../Features/Auth/reducer/auth.slice';
import { TYPE_NOTIFICATION } from '../../components/Notification';

export default function Header() {
  console.log('Loading component: Header');
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.auth.isLogin);
  // const userLogin = useSelector((state) => state.auth.userLogin);

  React.useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute(
        'data-theme',
        localStorage.getItem('theme') || 'one'
      );
    if (LOCAL.getAccessToken() && LOCAL.getUser()) {
      dispatch(authSlice.actions.FETCH_LOGIN());
    }
  }, []);
  return (
    <header id="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-left">
            <Navigation />
          </div>
          <div className="header-logo">
            <img
              src="/image/logo-primary-dark.png"
              alt="Dược Mỹ Thiên Nhiên D'Queen cùng Akariphan"
            />
            <br />
          </div>
          <div className="header-right">
            <ul>
              <li className="header-search">
                <Search />
              </li>

              {/* <li
                className="header-notification"
                onClick={() =>
                  dispatch(
                    ACTIONS.modal(
                      true,
                      <Infomation typeModal={TYPE_MODAL.INFO} />
                    )
                  )
                }
              >
                {isLogin ? 'Chào Sang' : ''}
              </li> */}
              {/* {isLogin && userLogin ? (
                <li>Hi, {userLogin.name}</li>
              ) : (
                ''
              )} */}
              {/* <li
                className="header-account"
                onClick={() =>
                  dispatch(
                    ACTIONS.modal(
                      true,
                      <Infomation typeModal={TYPE_MODAL.INFO} />
                    )
                  )
                }
              >
                <HeaderAccount />
              </li> */}
              <li
                className="header-cart"
                onClick={() =>
                  // dispatch(
                  //   ACTIONS.modal(
                  //     true,
                  //     <Infomation typeModal={TYPE_MODAL.CART} />
                  //   )
                  // )
                  dispatch(
                    ACTIONS.ntf(
                      TYPE_NOTIFICATION.success,
                      'Hệ Thống Đang nâng cấp !'
                    )
                  )
                }
              >
                <FaOpencart />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
