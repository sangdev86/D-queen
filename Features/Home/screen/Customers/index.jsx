import React, { Fragment } from 'react';
import Carousel from '../../../../components/Carousel';

export default function Customers() {
  const feedbackData = {
    show: 4,
    data: [
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/1.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/2.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/3.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/4.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/5.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/6.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/7.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/8.png',
        alt: "Review sản phẩm D'Queen"
      },
      {
        classNameChild: 'feedback-carousel-item',
        src: '/image/customers/10.png',
        alt: "Review sản phẩm D'Queen"
      }
    ]
  };
  return (
    <section id="customers">
      <div className="container">
        <div className="feed-back-wrapper">
          <div className="left">
            <h2>
              Sản phẩm
              <br />
              D'Queen có mặt tại
              <br />
              <span>Spa làm đẹp </span>
              <br />
              {/* <span>& người tiêu dùng nhỏ lẻ</span> */}
            </h2>
            {/* <h2>
              Phản hồi từ <br />
              <span> khách hàng</span>
            </h2> */}
            <p>
              D'Queen tự hào tạo ra sản phẩm giữ trọn niềm tin không
              chỉ ở những khách hàng nhỏ lẻ mà còn ở các cơ sở trung
              tâm làm đẹp Spa.
            </p>
            <div className="extend">
              <span className="button-primary">Sản Phẩm</span>
            </div>
          </div>
          <div className="right">
            <Carousel
              show={2}
              length={feedbackData.data.length}
              // style={'w-40'}
              infinityTime={4000}
            >
              <Fragment key="item">
                {feedbackData.data.map((item, index) => {
                  const { classNameChild, text, src, alt } = item;
                  return (
                    <div
                      className="wrapper-carousel-item"
                      key={index}
                    >
                      <div className={classNameChild}>
                        <img src={src} alt={alt} className="img" />
                        <div className="text">{text}</div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
