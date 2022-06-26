import React from 'react';
import { ACTIONS } from '../../../components/reducer/actions';
import Price from '../../../components/Price';
export default function Cart() {
  const [amount, setAmount] = React.useState(1);
  const api = [
    {
      id: '1',
      category: 'Serum',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  1',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],

      price: 499000,
      sale: 449000,
      latest: false,
      saleTime: 93323232,
      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '2',
      category: 'Sữa rửa mặt',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  2',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '3',
      category: 'Chống nắng',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  3',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '4',
      category: 'Kem',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '5',
      category: 'Combo vip',

      title: 'Sưã rữa mặt dược liệu thiên nhiên  5',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '6',
      category: 'Collagen',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '7',
      category: 'Sửa rửa mặt',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  5',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '8',
      category: 'Collagen',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    }
  ];
  const converData = api.map((item) => ({ ...item, amount: 1 }));
  const [data, setData] = React.useState(converData);

  const handleOnChange = (e, index) => {
    const { value } = e.target;

    if (isNaN(value)) return;
    const updateData = [...data];
    if (value === '') {
      value = 0;
    }
    updateData[index].amount = parseInt(value);

    setData(updateData);
  };
  const changeAmount = (value, index) => {
    const updateData = [...data];
    if (value <= 1) {
      value = 1;
    }
    updateData[index].amount = parseInt(value);
    setData(updateData);
  };
  const checkItem = (index) => {
    if (index % 2 !== 0) return 'cart-item even';
    return 'cart-item';
  };
  return (
    <div id="cart">
      <div className="list-cart">
        <div className="cart-head cart-item">
          <div className="cart-product">Sản phẩm</div>
          <div className="cart-amount">số lượng</div>
          <div className="cart-price">Đơn giá</div>
          <div className="cart-charge">Thành tiền</div>
        </div>

        <ul className="cart-item-wrapper scroll-custom">
          {data.map((item, index) => {
            const { title, image, price, latest, sale, amount } =
              item;
            console.log(index, amount);
            return (
              <li className={checkItem(index)} key={index}>
                <div className="cart-product">
                  <h5>{title}</h5>
                  <div className="laster">
                    {latest ? 'Dòng mới' : ''}
                  </div>
                  <div className="image">
                    <img src={image[0].src} alt={title} />
                  </div>
                </div>
                <div className="cart-amount">
                  <input
                    className="input"
                    value={amount}
                    type="text"
                    onChange={(e) => handleOnChange(e, index)}
                  />
                  <div className="change-amount noselect">
                    <span
                      className="in item"
                      onClick={() => changeAmount(amount + 1, index)}
                    >
                      +
                    </span>
                    <span
                      className="de item"
                      onClick={() => changeAmount(amount - 1, index)}
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="cart-price">
                  <Price price={price} sale={sale} />
                </div>
                <div className="cart-charge">
                  <Price charge={amount * sale} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="statistical">fdfd</div>
    </div>
  );
}
