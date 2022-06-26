import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { convertVND } from '../../../Assets/utils/convertMoney';
import Carousel from '../../../components/Carousel';
import Price from '../../../components/Price';
import SaleTime from '../../../components/SaleTime';
import FeedBack from '../../Home/screen/FeedBack';

export default function ProductDetail() {
  const product = useSelector((state) => state.productDetail.product);
  const [amount, setAmount] = React.useState(1);

  React.useEffect(() => {
    console.log('loadng', product);
  }, []);
  const api = {
    id: '1',
    title: 'Cấp Ẩm Căng Bóng Da và phục hồi da',

    image: [
      {
        src: '/image/products/SRM-1.png',
        alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
      },
      {
        src: '/image/products/SRM-1.png',
        alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
      },
      {
        src: '/image/products/SRM-1.png',
        alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
      }
    ],
    price: 499000,
    sale: 449000,
    latest: false,
    saleTime: 1655658916496,

    description:
      "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn. Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn. ",
    impressive: [
      'Dưỡng ẩm',
      'Thải độc làn da',
      'Thông thoáng',
      'Vitamin b2',
      'Ngăn lão hóa',
      'Sinh Collagen'
    ],
    ingredient: ['Rể cây ô rô', 'Cam thảo', 'Dầu cám gạo'],
    uses: [
      'Giúp da trắng sáng, căng bóng và mịn màng',
      'Tăng cường độ ẩm cho da',
      'Nuôi dưỡng da khoẻ mạnh',
      'Ngăn ngừa lão hoá',
      'Phục hồi da, mờ nếp nhăng'
    ],
    category: 'Serum',
    youtube: {
      title: 'Bạn sẽ thấy khác biệt sau 3 ngày sử dụng',
      src: 'https://www.youtube.com/embed/hGu_K8YGBD8',
      seo: "D'Queen AkariPhan"
    }
  };
  const {
    image,
    category,
    description,
    ingredient,
    sale,
    title,
    uses,
    latest,
    price,
    saleTime,
    impressive,
    youtube
  } = api;
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (isNaN(value)) return;
    setAmount(value);
  };
  return (
    <div id="productDetail">
      <div className="container">
        <div id="product-detail">
          <div className="left">
            <Carousel
              show={1}
              length={image.length}
              infinityTime={5000}
            >
              <Fragment>
                {image.map((item, index) => (
                  <img key={index} src={item.src} alt={item.alt} />
                ))}
              </Fragment>
            </Carousel>
          </div>
          <div className="right">
            <h3>{category} D'QUEEN </h3>
            <h2>
              <span>Mall</span> {title}
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
                    className="in item"
                    onClick={() => setAmount(amount + 1)}
                  >
                    +
                  </span>
                  <span
                    className="de item"
                    onClick={() =>
                      setAmount(amount <= 1 ? 1 : amount - 1)
                    }
                  >
                    -
                  </span>
                </div>
                <div className="button">
                  <span className="button-primary-light">Thêm</span>{' '}
                  <span className="button-primary">Giỏ Hàng</span>
                </div>
              </div>
              <div className="inspection">
                <span className="text"> Đã kiểm định an Toàn</span>
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
          <span>Nhiên liệu an toàn nhập khẩu từ Châu Âu: </span>
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
    </div>
  );
}
