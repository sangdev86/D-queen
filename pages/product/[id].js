import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { checkNullUndefined } from '../../Assets/utils/checkNullUndefined';
import Carousel from '../../components/Carousel';
import Price from '../../components/Price';
import { ACTIONS } from '../../components/reducer/actions';
import SaleTime from '../../components/SaleTime';
import FeedBack from '../../Features/Home/screen/FeedBack';
import { TYPE_PRODUCT_DETAIL } from '../../Features/ProductDetail/reducer/actions';
import api from '../../services/client';

export default function ProductID({ productDetail }) {
  const [amount, setAmount] = React.useState(1);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (isNaN(value)) return;
    setAmount(value);
  };

  return (
    <div id="productDetail">
      {checkNullUndefined(productDetail)
        ? (() => {
            const {
              images,
              category,
              description,
              ingredient,
              sale,
              name,
              uses,
              price,
              saleTime,
              impressive,
              youtube
            } = productDetail.data;
            return (
              <div className="container">
                <div id="product-detail">
                  <div className="left">
                    <Carousel
                      show={1}
                      length={
                        checkNullUndefined(images) ? images.length : 0
                      }
                      infinityTime={5000}
                    >
                      <Fragment>
                        {checkNullUndefined(images)
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
                      {impressive?.map((item, index) => (
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
                          value={amount ? amount : 0}
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
                          <span className="button-primary-light">
                            Thêm
                          </span>{' '}
                          <span className="button-primary">
                            Giỏ Hàng
                          </span>
                        </div>
                      </div>
                      <div className="inspection">
                        <span className="text">
                          {' '}
                          Đã kiểm định an Toàn
                        </span>
                        <span className="see">Xem</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="product-banner">
                  {[
                    'Hàng chính hãng 100%',
                    'Nguyên Liệu Nhập Khẩu Châu Âu',
                    'Giao Hàng Miễn Phí 400k',
                    'Soi Da miễn phí'
                  ].map((item, index) => (
                    <p key={index} className="item">
                      {item}
                    </p>
                  ))}
                </div>

                <div id="ingredient" className="product-custom">
                  <h3>Thành phần:</h3>
                  <span>
                    Nhiên liệu an toàn nhập khẩu từ Châu Âu:{' '}
                  </span>
                  {ingredient.map((item, index) => (
                    <span className="item" key={index}>
                      {item} ,
                    </span>
                  ))}
                  ...
                </div>
                <div id="uses" className="product-custom">
                  <h3>Công dụng:</h3>
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
                  <h3>Kết quả sử dụng khách hàng gửi về D'Queen</h3>
                  <div className="img">
                    <img src="/image/customers/7.png" alt="Da đẹp" />
                  </div>
                </div>
                <div id="feed-back">
                  <FeedBack />
                </div>
              </div>
            );
          })()
        : ''}
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = TYPE_PRODUCT_DETAIL.getAllSlugOfProducts();
  return paths;
};
export const getStaticProps = async ({ params }) => {
  try {
    const productDetail = await api.fetchData(
      `/products/${params.id}`
    );
    return {
      props: {
        productDetail
      },
      revalidate: 1
    };
  } catch (error) {
    return {
      props: {},
      revalidate: 1
    };
  }
};
