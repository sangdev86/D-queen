import React from 'react';
import { AiFillStar } from 'react-icons/ai';
export default function Card(props) {
  const {
    id,
    title,
    description,
    impressive,
    image,
    price,
    sale,
    saleTime,
    index
  } = props;

  return (
    <div className="card wrapper-carousel-item">
      <div className="wrapper-card">
        <div className="top-card">
          <img src={image[0].src} alt="title" />
        </div>
        <div className="bottom-card">
          <h4>{title}</h4>
          <span className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <div className="price">
            {price > 0 ? (
              <div className="sale">
                <span className="price-old">{price}</span>
                <span className="price-current">{sale}</span>
              </div>
            ) : (
              <div className="none-sale">
                <span className="price-current">{price}</span>
              </div>
            )}
          </div>
          <ul className="impressive">
            {impressive.map((item, index) => (
              <li key={index} className="impressive-item">
                {item}
              </li>
            ))}
          </ul>
          <p className="btn">ADD TO CARD</p>
        </div>
      </div>
    </div>
  );
}
