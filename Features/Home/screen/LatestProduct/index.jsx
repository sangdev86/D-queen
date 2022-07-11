import React from 'react';

export default function LatestProduct() {
  return (
    <div id="latest-product" className="custom">
      <div className="lastest-product-wrapper">
        <div className="left">
          <h2>
            Sắp ra mắt <br /> Sản phẩm mới nhất
            <br />
            <span> Kem trị nám, tàn nhan</span>
          </h2>
          <p>
            Dòng sản phẩm mới với tên gọi là kem đã năng, hỗ trợ trị
            nám sau 1 tháng sử dụng sẽ thấy sự khác biệt
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
