import React, { Fragment } from 'react';

export default function Customers() {
  return (
    <section id="customers">
      <div className="container">
        <h2>Khách Hàng</h2>
        <p className="title-sub">
          Khách hàng và đối tác tin tưởng sự uy tín của{' '}
          <span className="brand-name">D'Queen</span>
        </p>
        <div className="customers-wrapper">
          {[
            {
              title: "SPA làm đẹp cùng với D'Queen",
              number: '10',
              text: 'Spa cũng là khách hàng thân thiết của chúng tôi',
              images: [
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/1.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/2.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/3.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/4.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/5.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                }
              ]
            },
            {
              title: "SPA làm đẹp cùng với D'Queen",
              number: '10',
              text: 'Spa cũng là khách hàng thân thiết của chúng tôi',
              images: [
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/1.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/2.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/3.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/4.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/5.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                }
              ]
            },
            {
              title: "SPA làm đẹp cùng với D'Queen",
              number: '10',
              text: 'Spa cũng là khách hàng thân thiết của chúng tôi',
              images: [
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/1.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/2.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/3.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/4.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                },
                {
                  classNameChild: 'spa-carousel-item',
                  src: '/image/spa/5.png',
                  alt: 'Spa sử dụng Mỹ Phẩm Dược liệu thiên nhiên DQueen để chăm sóc da cho khách hàng'
                }
              ]
            }
          ].map((item, index) => {
            const { title, number, text, images } = item;
            return (
              <div className="customers-item" key={index}>
                <div className="spa">
                  <div className="top-item">
                    <h3>{title}</h3>
                  </div>
                  <div className="middle-item">
                    <p>{text}</p>
                    <span>{number}</span>
                  </div>
                  <div className="bottom-item">
                    {images.map((el, index) => {
                      const { src, alt } = el;
                      return <Fragment key={index}>hihi</Fragment>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
