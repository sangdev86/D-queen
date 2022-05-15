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
            <Image src="/image/logo.png" width={90} height={40} />
          </div>
          <div className="header-right">
            <div className="header-search">
              <Search />
            </div>

            <div className="header-notification">
              <Notification />
            </div>
            <div className="header-account">
              <HeaderAccount />
            </div>
            <did className="header-cart">
              <Cart />
            </did>
          </div>
        </div>
      </div>
    </header>
  );
}
