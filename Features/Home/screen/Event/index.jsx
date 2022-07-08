import React, { Fragment } from 'react';
import { GiChestnutLeaf } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import Card from '../../../../components/Card';
import Carousel from '../../../../components/Carousel';
export default function Event() {
  const allProducts = useSelector((state) => state.home.allProducts);
  return (
    <div id="event" className="custom">
      <div className="container">
        <div className="top-title left">
          <div className="layout-left">
            <span className="icon">
              <GiChestnutLeaf />
            </span>

            <h2>Event</h2>
          </div>
          <div className="layout-right">
            <span className="button-primary-light">
              Tất cả sản phẩm
            </span>
          </div>
        </div>
        <div className="bottom-content">
          <Carousel
            show={4}
            length={allProducts !== null ? allProducts.length : 0}
            infinityTime={5000}
          >
            <Fragment key="item">
              {allProducts !== null
                ? allProducts.map((card, index) => (
                    <Fragment key={index}>
                      <Card {...card} />
                    </Fragment>
                  ))
                : ''}
            </Fragment>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
