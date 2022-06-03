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
  );
}
