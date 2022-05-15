import React from 'react';
import { RiFacebookCircleLine, RiYoutubeLine } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer">
      <section id="review" className="footer-item">
        <div className="container">
          <h3>
            Niềm tin của khác hàng dành Dược Mỹ Phẩm Thiên Nhiên
            <span className="brand-name"> D'Queen</span>
          </h3>
        </div>
      </section>
      <section id="social" className="footer-item">
        <div className="container">
          <h3>
            Theo dõi review{' '}
            <span className="brand-name">D'Queen</span> qua các kênh
          </h3>
          <ul className="social-follow-wrapper">
            {[
              <RiFacebookCircleLine />,
              <RiYoutubeLine />,
              <FaTiktok />
            ].map((item) => (
              <li className="social-follow-item">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <div id="footer-middle">
        <div className="container">
          <div className="footer-middle-wrapper">
            <h3 className="company-logo">
              CÔNG TY TNHH MỸ PHẨM D'QUEEN
            </h3>
            <div className="footer-middle-wrapper-detail">
              {[
                {
                  tittle: "D'QUEEN",
                  data: [
                    'Kho 1: Trà Vinh, Phone: 09....',
                    'Kho 2: Bình Chiểu - Thủ Đức TPHCM, Phone; 0898849953 ',
                    'Email: gnas93@gmail.com',
                    'Thứ - CN: 9h-18h'
                  ]
                },
                {
                  tittle: 'SẢN PHẨM',
                  data: [
                    'Sữa rữa mặt Dược thiên nhiên',
                    'Tái tạo da',
                    'Serum',
                    'Kem dưỡng da ngày/ban đêm',
                    'Chống nắng',
                    'Collagen nước',
                    'Dung dịch vệ sinh nam và nữ',
                    "Sản phẩm công nghệ độc quyền nhà D'Queen"
                  ]
                },
                {
                  tittle: 'HỖ TRỢ',
                  data: [
                    'Điều khoản sử dụng',
                    'Chính sách bảo mật',
                    'Phương thức giao hàng và thanh toán'
                  ]
                }
              ].map((item) => (
                <div className="footer-middle-detail">
                  <h4>{item.tittle}</h4>
                  <ul>
                    {item.data.map((el) => (
                      <li className>
                        <a href="#">{el}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="copy-right">
        <div className="container">
          <span className="copy-right-detail">
            ©2022. Công ty TNHH D'Queen GPDKKD: xxx do sở KH & ĐT
            TP.HCM cấp ngày 02/01/xxxx. GPMXH: xxx/GP-BTTTT do Bộ
            Thông Tin và Truyền Thông cấp ngày 04/06/xxx.
          </span>
        </div>
      </div>
    </footer>
  );
}
