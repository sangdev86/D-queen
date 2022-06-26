import React from 'react';
import { convertVND } from '../../Assets/utils/convertMoney';

export default function Price({ sale, price, charge }) {
  return (
    <div id="price">
      {!charge ? (
        <>
          <span className="price-sale">{convertVND(sale)}</span>
          <br />
          <span className="none-price-sale">{convertVND(price)}</span>
        </>
      ) : (
        <span className="charge">{convertVND(charge)}</span>
      )}
    </div>
  );
}
