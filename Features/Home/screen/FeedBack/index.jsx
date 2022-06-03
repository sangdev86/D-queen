import React, { Fragment } from 'react';
import Carousel from '../../../../components/Carousel';

export default function FeedBack() {
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
    <section id="feed-back">
      <div className="container">
        <div className="feed-back-wrapper">
          <div className="left">
            <h2>
              Phản hồi từ <br />
              <span> khách hàng</span>
            </h2>
            <p>
              D'Queen tự hào tạo ra sản phẩm chất lượng làm hài lòng
              nhiều khách hàng. Bởi vì chúng tôi đã phải dày công thử
              nghiệm rất nhiều công thức khi có kết quả khả quan và
              thực tế đó là lúc chúng tôi công bố sản phẩm.
            </p>
            <div className="extend">
              <span className="button-primary">Xem thêm</span>
            </div>
          </div>
          <div className="right">
            <Carousel
              show={2}
              length={feedbackData.data.length}
              style={'w-40'}
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
