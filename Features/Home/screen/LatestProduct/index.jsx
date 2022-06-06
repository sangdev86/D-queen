import React from 'react';

export default function LatestProduct() {
  return (
    <div id="latest-product">
      <div className="lastest-product-wrapper">
        <div className="left">
          <h2>
            Ra mắt <br /> Sản phẩm mới nhất
            <br />
            <span> Kem trị nám tàn nhan</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quaerat adipisci laudantium velit sint consequuntur
            tenetur? Soluta, quaerat dolor enim, id libero magnam
            facere, ab eos voluptatum dignissimos magni optio
            explicabo.
          </p>
        </div>
        <div className="right">
          <div className="img-model">
            <img src="./image/latestPoduct/1.png" />
          </div>
          <div className="img-product">
            <img src="./image/latestPoduct/2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
