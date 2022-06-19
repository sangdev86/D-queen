import React from 'react';
import { convertVND } from '../../Assets/utils/convertMoney';

export default function Price({ sale, price }) {
  return (
    <div id="price">
      <span className="price-sale">{convertVND(sale)}</span>
      <br />
      <span className="none-price-sale">{convertVND(price)}</span>
    </div>
  );
}
