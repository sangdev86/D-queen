import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import Search from './Search';
import HeaderAccount from './HeaderAccount';
import Cart from './Cart';
import Notification from './Notification';

export default function Header() {
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
          </div>
          <div className="header-right">
            <ul>
              <li className="header-search">
                <Search />
              </li>

              <li className="header-notification">
                <Notification />
              </li>
              <li className="header-account">
                <HeaderAccount />
              </li>
              <li className="header-cart">
                <Cart />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
