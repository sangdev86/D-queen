import React from 'react';
import { useDispatch } from 'react-redux';
import Price from '../../../../components/Price';
import { ACTIONS } from '../../../../components/reducer/actions';
import { TYPE_CART } from '../../reducer/actions';

export default function ListCart() {
  const dispatch = useDispatch();
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
      title: 'Sưã rữa mặt dược liệu thiên nhiên  6',
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
      title: 'Sưã rữa mặt dược liệu thiên nhiên  7',
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
      title: 'Sưã rữa mặt dược liệu thiên nhiên  8',
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
  const converData = api.map((item) => ({
    ...item,
    amount: 1,
    checked: false
  }));
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
  const handleChecked = (e, index) => {
    const { checked } = e.currentTarget;
    const updateData = [...data];

    updateData[index].checked = checked;
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
  const checkAmountChecked = () => {
    let amountChecked = 0;
    for (let i = 0; i < data.length; i++) {
      data[i].checked ? amountChecked++ : '';
    }
    return amountChecked;
  };
  const allChargeF = () => {
    let allCharge = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].checked) {
        allCharge += data[i].amount * data[i].sale;
      }
    }
    return allCharge;
  };
  const checkAllF = (check) => {
    let updateData = [...data];
    for (let i = 0; i < updateData.length; i++) {
      updateData[i].checked = check;
    }
    setData(updateData);
  };
  const delItemChecked = () => {
    let updateData = [];
    data.forEach((el) => {
      el.checked === false ? updateData.push(el) : '';
    });
    setData(updateData);
  };
  const handleBill = () => {
    let bill = [];
    data.forEach((item) => {
      const { amount, price, sale, title, checked } = item;
      if (checked) {
        bill.push({ title, amount, title, price, sale });
      }
    });

    if (bill.length > 0) {
      dispatch(TYPE_CART.renderBill(bill));
    }
  };
  return (
    <div id="list-cart" className="cs-modal-cart">
      <div className="list-cart">
        <div className="cart-head cart-item">
          <div className="cart-product">
            Chọn ({checkAmountChecked()})
          </div>
          <div className="cart-product">Sản phẩm</div>
          <div className="cart-amount">số lượng</div>
          <div className="cart-price">Đơn giá</div>
          <div className="cart-charge">Thành tiền</div>
        </div>

        <ul className="cart-item-wrapper scroll-custom">
          {data.map((item, index) => {
            const {
              title,
              image,
              price,
              latest,
              sale,
              amount,
              checked
            } = item;

            return (
              <li className={checkItem(index)} key={index}>
                <div className="">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleChecked(e, index)}
                  />
                </div>
                <div className="cart-product">
                  <h5 className={checked ? 'checked' : ''}>
                    {title}
                  </h5>
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
                      className="de item"
                      onClick={() => changeAmount(amount - 1, index)}
                    >
                      -
                    </span>
                    <span
                      className="in item"
                      onClick={() => changeAmount(amount + 1, index)}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="cart-price">
                  <Price price={price} sale={sale} color="#515151" />
                </div>
                <div className="cart-charge">
                  <Price
                    charge={amount * sale}
                    color={checked ? 'var(--color-primary-dark)' : ''}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="actions">
          <div className="actions-left">
            <div
              className="actions-button"
              onClick={() => checkAllF(true)}
            >
              <span className="all button-bs">Chọn tất cả</span>
            </div>
            <div
              className="actions-button"
              onClick={() => checkAllF(false)}
            >
              <span className="del-tick button-bs">Bỏ đã chọn</span>
            </div>
            <div
              className="actions-button"
              onClick={() => delItemChecked()}
            >
              <span className="del-all button-bs">
                Xóa ra giỏ hàng
              </span>
            </div>
          </div>
          <div className="actions-right">
            {allChargeF() && checkAmountChecked() ? (
              <div className="all-charge">
                <span className="amount">
                  ({checkAmountChecked()})
                </span>
                <Price
                  charge={allChargeF()}
                  color="var(--color-primary-dark)"
                />
              </div>
            ) : (
              ''
            )}

            <div className="actions-button">
              <span className="all button-bs" onClick={handleBill}>
                Tiến hành thanh toán
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
