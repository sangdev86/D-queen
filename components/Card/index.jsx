import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Price from '../Price';
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
          <Link href={`product/${id}`}>
            <img src={image[0].src} alt="title" />
          </Link>
        </div>
        <div className="bottom-card">
          <h4 className="title">
            <Link href={`product/${id}`}>{title}</Link>
          </h4>
          <span className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          <ul className="impressive">
            {impressive.map((item, index) => (
              <li key={index} className="impressive-item">
                {item}
              </li>
            ))}
          </ul>
          <div className="price">
            <Price price={price} sale={sale} />
            <div>
              <span className="btn btn-add">Thêm</span>
              {/* <span className="btn btn-buy">Mua</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
