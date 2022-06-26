import React, { useState } from 'react';
import Form from '../../../components/Form';
import Auth from '../../../Features/Auth/screen';
import Cart from '../../../Features/Cart/screen';
import { TYPE_MODAL } from './infomationData';

export default function Infomation({ typeModal }) {
  const { INFO, CART } = TYPE_MODAL;
  const [type, setType] = useState(typeModal);
  const checkActive = (typeItem) => {
    if (typeItem === type) return 'item active';

    return 'item';
  };
  return (
    <div id="infomation">
      <ul className="top">
        {[INFO, CART].map((item, index) => (
          <li
            className={checkActive(item)}
            key={index}
            onClick={() => setType(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {(() => {
        switch (type) {
          case INFO:
            return <Auth />;
          case CART:
            return <Cart />;
          default:
            break;
        }
      })()}
    </div>
  );
}
