import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertVND } from '../../../Assets/utils/convertMoney';
import Carousel from '../../../components/Carousel';
import Price from '../../../components/Price';
import { ACTIONS } from '../../../components/reducer/actions';
import SaleTime from '../../../components/SaleTime';
import FeedBack from '../../Home/screen/FeedBack';

export default function ProductDetail() {
  const productDetail = useSelector(
    (state) => state.productDetail.productDetail
  );
  const [amount, setAmount] = React.useState(1);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);

  const {
    images,
    category,
    description,
    ingredient,
    sale,
    name,
    uses,
    lastest,
    price,
    saleTime,
    impressive,
    youtube
  } = productDetail;

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (isNaN(value)) return;
    setAmount(value);
  };
  return (
    <div id="productDetail">
      {productDetail !== null && productDetail !== undefined ? (
        <div className="container">
          <div id="product-detail">
            <div className="left">
              <Carousel
                show={1}
                length={images !== null ? images.length : 0}
                infinityTime={5000}
              >
                <Fragment>
                  {images !== null
                    ? images.map((item, index) => (
                        <div className="wrapper-img-product-detail-page">
                          <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            width={550}
                            height={370}
                          />
                        </div>
                      ))
                    : ''}
                </Fragment>
              </Carousel>
            </div>
            <div className="right">
              <h3>{category} D'QUEEN </h3>
              <h2>
                <span>Mall</span> {name}
              </h2>
              <ul className="impressive">
                {impressive.map((item, index) => (
                  <li key={index} className="impressive-item">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="product-price">
                <div className="price">
                  <Price price={price} sale={sale} />
                </div>
                <div className="banner-sale">
                  <div className="sale">
                    <span>Flash Sale</span>
                  </div>
                  <div className="time">
                    <SaleTime miliSeconds={saleTime} />
                  </div>
                </div>
              </div>
              <div className="despriction">{description}</div>
              <div className="product-amount">
                <div className="amount">
                  <input
                    className="input"
                    value={amount}
                    type="text"
                    onChange={handleOnChange}
                  />
                  <div className="change-amount noselect">
                    <span
                      className="de item"
                      onClick={() =>
                        setAmount(amount <= 1 ? 1 : amount - 1)
                      }
                    >
                      -
                    </span>
                    <span
                      className="in item"
                      onClick={() => setAmount(amount + 1)}
                    >
                      +
                    </span>
                  </div>
                  <div className="button">
                    <span className="button-primary-light">Th??m</span>{' '}
                    <span className="button-primary">Gi??? H??ng</span>
                  </div>
                </div>
                <div className="inspection">
                  <span className="text"> ???? ki???m ?????nh an To??n</span>
                  <span className="see">Xem</span>
                </div>
              </div>
            </div>
          </div>
          <div id="product-banner">
            {[
              'H??ng ch??nh h??ng 100%',
              'Nguy??n Li???u Nh???p Kh???u Ch??u ??u',
              'Giao H??ng Mi???n Ph?? 400k',
              'Soi Da mi???n ph??'
            ].map((item, index) => (
              <p key={index} className="item">
                {item}
              </p>
            ))}
          </div>

          <div id="ingredient" className="product-custom">
            <h3>Th??nh ph???n:</h3>
            <span>Nhi??n li???u an to??n nh???p kh???u t??? Ch??u ??u: </span>
            {ingredient.map((item, index) => (
              <span className="item" key={index}>
                {item} ,
              </span>
            ))}
            ...
          </div>
          <div id="uses" className="product-custom">
            <h3>C??ng d???ng:</h3>
            <ul className="">
              {uses.map((item, index) => (
                <li className="item" key={index}>
                  {item}.
                </li>
              ))}
            </ul>
          </div>
          <div id="product-youtube">
            <h2>{youtube.title}</h2>
            <div>
              <iframe
                width="666"
                height="366"
                src={youtube.src}
                title={youtube.seo}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <div id="result" className="product-custom">
            <h3>K???t qu??? s??? d???ng kh??ch h??ng g???i v??? D'Queen</h3>
            <div className="img">
              <img src="/image/customers/7.png" alt="Da ?????p" />
            </div>
          </div>
          <div id="feed-back">
            <FeedBack />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
