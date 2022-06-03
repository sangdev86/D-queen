import React from 'react';

export default function Banner() {
  return (
    <div id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left banner-item">
            <div>
              <h1>
                D'Queen giữ trọn tuổi
                <br /> <span>THANH XUÂN</span>
              </h1>
              <h2>
                Tinh chất dược liệu thiên nhiên
                <br />
                Làm nên vẻ đẹp tràn đầy sức sống tự nhiên theo năm
                tháng
              </h2>
              <span className="button-primary">Về D'Queen</span>
            </div>
          </div>
          {/* <div className="banner-right banner-item">
            <img src="/image/banner/banner-1.png" alt="fdj" />
          </div> */}
          <div className="banner-right banner-founder">
            <img src="/image/banner/banner-2.png" alt="fdj" />
          </div>
        </div>
      </div>
    </div>
  );
}
