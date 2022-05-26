import React, { Fragment } from 'react';
import { RiFacebookCircleLine, RiYoutubeLine } from 'react-icons/ri';
import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import Carousel from '../../components/Carousel';

export default function Footer() {
  const feedbackData = {
    show: 4,
    data: [
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/0.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/1.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/2.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/3.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/4.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/5.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/6.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/7.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/8.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/feedback/9.png',
        alt: "Review sản phẩm D'Queen"
      }
    ]
  };

  return (
    <footer id="footer">
      <section id="feedback" className="footer-item">
        <div className="container">
          <h2>Feedback</h2>

          <Carousel show={4} length={feedbackData.data.length}>
            <Fragment key="item">
              {feedbackData.data.map((item, index) => {
                const { classNameChild, text, src, alt } = item;
                return (
                  <div className="wrapper-carousel-item" key={index}>
                    <div className={classNameChild}>
                      <img src={src} alt={alt} className="img" />
                      <div className="text">{text}</div>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          </Carousel>
          <div className="feedback_extend">
            <span className="button-primary">Xem thêm</span>
          </div>
        </div>
      </section>

      <section id="contact" className="footer-item">
        <div className="container">
          <h2>Liên Hệ</h2>
          <p className="text">
            Bạn vui lòng add zalo để được phản hồi nhanh nhất từ chúng
            tôi hoặc qua mạng xã hội khác
          </p>
          <ul className="social-follow-wrapper">
            {[
              {
                name: 'LINH NGUYỄN',
                avatar: '/image/contact/avatar-1.png',
                phone: '0939787887',
                text: "Sự uy tín là thứ vô cùng quan trọng, chúng tôi sẽ cố gắng là nơi niềm tin vững chắc cho tất cả khách hàng của D'Queen",
                time: '8H - 19H',
                avatarFacebook: '/image/contact/facebook-avatar.png',
                avatarZalo: '/image/contact/zalo-avatar.png',
                linkFacebook:
                  'https://www.facebook.com/profile.php?id=100004389555833',
                linkZalo: ''
              },
              {
                name: 'SANG TRẦN',
                avatar: '/image/contact/avatar-2.png',
                phone: '0898849953',
                text: 'Thời hiện nay mua được sản phẩm ưng ý vừa đúng giá là chuyện khó, những  đối với chúng tôi còn hơn thế nữa chất lượng còn hơn cả giá tiền',
                time: '19H - 0H',
                avatarFacebook: '/image/contact/facebook-avatar.png',
                avatarZalo: '/image/contact/zalo-avatar.png',
                linkFacebook: 'https://www.facebook.com/gnas93',
                linkZalo: ''
              },
              {
                name: 'D QUEEN',
                avatar: '/image/contact/avatar-3.png',
                phone: '0939787887',
                text: 'Sản phẩm từ Dược Liệu Thiên Nhiên mang lại trãi nghiệm tốt cho khách hàng, đó chính là chất lượng thực tế . Rất cảm ơn khách hàng đã tin dùng.',
                time: '19H - 0H',
                avatarFacebook: '/image/contact/facebook-avatar.png',
                avatarZalo: '/image/contact/zalo-avatar.png',
                linkFacebook:
                  'https://www.facebook.com/profile.php?id=100004389555833',
                linkZalo: ''
              }
            ].map((item, index) => {
              const {
                name,
                avatar,
                phone,
                text,
                time,
                avatarFacebook,
                linkFacebook,
                avatarZalo,
                linkZalo
              } = item;
              return (
                <li className="contact-follow-item" key={index}>
                  <div className="contact-top">
                    <img
                      className={`contact-avatar avatar-${index + 1}`}
                      src={avatar}
                      alt={`D'Queen ${name}`}
                    />

                    <p className="contact-name">{name}</p>

                    <p className="contact-phone">{phone}</p>

                    <p className="contact-role">{text}</p>

                    <p className="contact-time">Time: {time}</p>
                  </div>
                  <div className="contact-middle">
                    <span className="contact-button button-primary-gradient">
                      Follow
                    </span>
                  </div>
                  <div className="contact-bottom">
                    <span className="contact-facebook">
                      <a href={linkFacebook} target="_blank">
                        <img
                          src={avatarFacebook}
                          alt="Liên hệ D Queen , sdt D queen"
                        />
                      </a>
                    </span>

                    <span className="contact-zalo">
                      <a href={linkZalo} target="_blank">
                        <img
                          src={avatarZalo}
                          alt="Liên hệ D Queen , sdt D queen"
                        />
                      </a>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <section id="social" className="footer-item">
          <div className="container">
            <h2>Chanel</h2>
            <p className="text">
              Theo dõi review để nhận thông tin khuyến mãi
            </p>
            <ul className="social-follow-wrapper">
              {[
                <RiFacebookCircleLine />,
                <RiYoutubeLine />,
                <FaTiktok />
              ].map((item, index) => (
                <li className="icon" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <div id="footer-middle">
        <div className="container">
          <div className="footer-middle-wrapper">
            <h2 className="company-logo">
              CÔNG TY TNHH DL MỸ PHẨM THIÊN NHIÊN D'QUEEN
            </h2>
            <div className="footer-middle-wrapper-detail">
              {[
                {
                  tittle: "D'QUEEN",
                  data: [
                    'Kho 1: Trà Vinh, Phone: 09....',
                    'Kho 2: Bình Chiểu - Thủ Đức TPHCM, Phone: 0898849953 ',
                    'Email: myphamdqueen@gmail.com',
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
                    "Sản phẩm thương hiệu và công nghệ độc quyền của D'Queen"
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
              ].map((item, index1) => (
                <div className="footer-middle-detail" key={index1}>
                  <h4>{item.tittle}</h4>
                  <ul>
                    {item.data.map((el, index2) => (
                      <li className="" key={index2}>
                        {el}
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
            <br />@ Bản quyền thuộc DR QUEEN
          </span>
        </div>
      </div>
    </footer>
  );
}
