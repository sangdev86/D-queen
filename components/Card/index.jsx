import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Price from '../Price';
import { ACTIONS } from '../reducer/actions';
export default function Card(props) {
  const dispatch = useDispatch();
  const { _id, name, impressive, images, price, sale, saleTime } =
    props;

  return (
    <div className="card wrapper-carousel-item">
      <div className="wrapper-card">
        <div className="top-card">
          <Link href={`/product/${_id ? _id : ''}`}>
            <img
              src={images ? images[0].src : ''}
              alt="title"
              onClick={() => dispatch(ACTIONS.loadingPage(true))}
            />
          </Link>
        </div>
        <div className="bottom-card">
          <h4
            className="title"
            onClick={() => dispatch(ACTIONS.loadingPage(true))}
          >
            {_id ? (
              <Link href={`/product/${_id ? _id : ''}`}>{name}</Link>
            ) : (
              ''
            )}
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
