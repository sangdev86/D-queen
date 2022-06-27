import React from 'react';
import { convertVND } from '../../Assets/utils/convertMoney';

export default function Price({ sale, price, charge, color = null }) {
  return (
    <div id="price">
      {sale && price ? (
        <>
          <span style={{ color: color }} className="price-sale">
            {convertVND(sale)}
          </span>
          <br />
          <span className="none-price-sale">{convertVND(price)}</span>
        </>
      ) : (
        <span style={{ color: color }} className="charge">
          {convertVND(charge)}
        </span>
      )}
    </div>
  );
}
