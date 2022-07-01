import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../../components/Form';
import Price from '../../../../components/Price';
import { TYPE_CART } from '../../reducer/actions';

export default function Bill() {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.cart.bill);
  console.log('bill', bill);

  const userLogin = useSelector((state) => state.auth.userLogin);
  const [haveVoucher, setHaveVoucher] = useState(0);
  const chargeProducts = bill.reduce((total, item) => {
    return total + item.sale * item.amount;
  }, 0);

  const transportFee = chargeProducts >= 40000 ? 0 : 30000;
  const chargeFinal = chargeProducts - transportFee - haveVoucher;
  const propsForm = {
    body: {
      username: '',
      phoneNumber: '',
      address: ''
    },
    typeRequest: 'post',
    post: {
      title: null,
      button: null,
      asyncActionForm: [
        {
          bodyAPI: {
            username: { type: 'text' },
            phoneNumber: { type: 'text' },
            address: 'text'
          }
        }
      ]
    }
  };
  return (
    <div id="bill" className="cs-modal-cart">
      <div className="list-bill">
        <div className="bill-item-wrapper">
          <h5>THANH TOÁN</h5>
          <div className="bill-head bill-item">
            <div className="stt">STT</div>
            <div className="title">Sản phẩm</div>
            <div className="amount">Số lượng</div>
            <div className="sale">Đơn giá</div>
          </div>
        </div>

        <ul className="bill-item-wrapper">
          {bill.map((item, index) => {
            const { title, amount, sale } = item;
            return (
              <li className="bill-item" key={index}>
                <div className="stt">{index + 1}</div>
                <div className="title">{title}</div>
                <div className="amount">{amount}</div>
                <div className="sale">
                  <Price charge={sale} color="#515151" />
                </div>
              </li>
            );
          })}
        </ul>
        <span
          className="buton-primary"
          onClick={() => dispatch(TYPE_CART.renderBill(null))}
        ></span>
      </div>
      <div className="infomation-user">
        <h5>KHÁCH HÀNG</h5>
        <Form {...propsForm} />
      </div>
      <div className="total">
        <div className="total-wrapper">
          <ul className="total-item-wrapper">
            <li className="item">
              <span className="total-left">Tổng giá sản phẩm: </span>
              <div className="total-right">
                <Price charge={chargeProducts} />
              </div>
            </li>
            <li className="">
              <span className="total-left">Phí vận chuyển: </span>
              <span className="total-right">{transportFee}</span>
            </li>
            {haveVoucher > 0 ? (
              <li>
                <span className="total-left">Giảm voucher: </span>
                <span className="total-right">- {haveVoucher}</span>
              </li>
            ) : (
              ''
            )}
            <li className="total-charge">
              <span className="total-left">Thanh toán: </span>
              <div className="total-right">
                <Price charge={chargeFinal} />
              </div>
            </li>
          </ul>
        </div>

        <div className="confirm">
          <span className="button-primary">Trở về giỏ hàng</span>
          <span className="button-primary">Đặt hàng</span>
        </div>
      </div>
    </div>
  );
}
