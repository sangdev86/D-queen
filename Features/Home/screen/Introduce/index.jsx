import React from 'react';

export default function Introduce() {
  return (
    <div id="introduce" className="custom">
      <div className="introduce-top">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="container">
          <div className="introduce-wrapper">
            <div className="us-img introduce-item">
              <span>Ca Sĩ Akari Phan</span>
              <img src="/image/introduce/akari-1.png" />
            </div>
            <div className="content-product introduce-item">
              <div className="content-wrapper-product">
                <h2>Về sản phẩm của chúng tôi</h2>
                <p>
                  Với sản phẩm cao cấp thuộc dòng Dược và chiết xuất
                  từ nguyên liệu thiên nhiên, nhưng định giá thành hợp
                  lý, được nhiều khách hàng phản hồi tốt. Dòng sản
                  phẩm sản phẩm trị nám, làm trẻ hóa làn da trắng
                  hồng, tăng thêm sức sống.
                </p>
                <br />
                <a href="#">
                  <span>Xin chi tiết</span>
                </a>
              </div>
            </div>
            <div className="content-our introduce-item">
              <div className="content-wrapper-our">
                <h2>Thương hiệu D'Queen</h2>
                <p>
                  Chúng tôi tự hào là công ty uy tín cùng với ca sĩ
                  Akari Phan làm đại diện thương hiệu D'Queen . Tất cả
                  pháp lý thực hiện đúng pháp luật, độ an toàn và chất
                  lượng của sản phẩm đã được kiểm định trước khi
                  thương mại. Tiêu chí của chúng tôi hướng tới là
                  chính là sự hài lòng của khách hàng.
                </p>
                <br />
                <a href="#">
                  <span>Xin chi tiết</span>
                </a>
              </div>
            </div>

            <div className="product-img introduce-item">
              <img src="/image/introduce/product-1.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="introduce-bottom">
        <div className="container">
          <div className="introduce-wrapper">
            <div className="content-spa">
              <h3>Dòng sản phẩm mới hỗ trợ trị nám hiệu quả</h3>
              <a href="#">
                <p>Sản Phẩm</p>
              </a>
            </div>
            <div className="img-spa">
              <img src="/image/introduce/latest-1.png" />
            </div>
            <div className="content-space-1"></div>
            <div className="user-img-top">
              <img src="/image/introduce/latest-2.png" />
            </div>

            <div className="content-user"></div>
            <div className="user-img-bottom">
              <img src="/image/introduce/latest-3.png" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
