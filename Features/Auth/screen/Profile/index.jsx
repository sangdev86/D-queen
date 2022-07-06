import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL } from '../../../../Assets/utils/local';
import { TYPE } from '../../../../Assets/utils/type';
import Address from '../../../../components/Address';
import Form from '../../../../components/Form';
import Loading from '../../../../components/Loading';
import { TYPE_AUTH } from '../../reducer/action';

export default function Profile() {
  console.log('Loading comoponet: AUTH/Profile');
  const userLogin = useSelector((state) => state.auth.userLogin);
  const loadingAuth = useSelector((state) => state.auth.loadingAuth);
  const dispatch = useDispatch();
  const addressUser = useSelector((state) => state.auth.addressUser);
  const [type, setType] = useState('');

  //scroll

  const profileEl = useRef();

  const scrollManual = (value) => {
    profileEl.current.scrollTop = value;
  };
  useEffect(() => {
    if (type !== '') {
      scrollManual(profileEl.current.scrollHeight);
    }
  }, [type]);

  const formAddAddress = {
    body: userLogin,
    typeRequest: 'post',
    post: {
      title: 'Thêm địa chỉ mới',
      button: 'Thêm mới',
      asyncActionForm: [
        {
          bodyAPI: {
            name: 'text',
            email: 'text',
            phoneNumber: 'text',

            address: {
              type: 'select',
              sub: [
                { id: '1', name: 'THPHCM' },
                { id: '2', name: 'Bình Dương' }
              ],
              name: 'name'
            }
          },
          action: TYPE_AUTH.login
        }
      ]
    }
  };
  const renderFormAddress = () => {
    switch (type) {
      case TYPE.ADD:
        return <Address />;

      default:
        break;
    }
  };

  const propsForm = {
    body: userLogin,
    typeRequest: 'post',
    post: {
      title: 'Thông tin khách hàng',
      button: 'Cập nhật',
      asyncActionForm: [
        {
          bodyAPI: {
            name: 'text',
            email: 'text',
            phoneNumber: 'text',

            address: {
              type: 'select',
              sub: [
                { id: '1', name: 'THPHCM' },
                { id: '2', name: 'Bình Dương' }
              ],
              name: 'name'
            }
          },
          action: TYPE_AUTH.login
        }
      ]
    }
  };

  return (
    <Loading loadingComponent={loadingAuth}>
      <div
        id="profile"
        className="cs-modal-auth-scroll"
        ref={profileEl}
      >
        <div className="profile-info">
          <Form {...propsForm} />
          <div
            className="navigation"
            onClick={() =>
              dispatch(
                TYPE_AUTH.logout({
                  refreshToken: LOCAL.getToken()
                })
              )
            }
          >
            Đăng xuất
          </div>
        </div>
        <div className="profile-address">
          <h5 className="title-layout-modal">THÔNG TIN ĐỊA CHỈ</h5>
          <div className="address-content">
            <ul className="wrapper-address">
              {addressUser.map(
                (
                  { receiver, receiverPhone, fullAddress, _id },
                  index
                ) => {
                  return (
                    <li key={index} className="address-item">
                      <div className="address-info">
                        <span className="receiver">{receiver}</span>
                        <span className="receiverPhone">
                          {receiverPhone}
                        </span>
                        <span className="fullAddress">
                          {fullAddress}
                        </span>
                        <div className="del-address">
                          <span
                            onClick={() =>
                              dispatch(TYPE_AUTH.delAddress(_id))
                            }
                          >
                            Xóa
                          </span>
                        </div>
                      </div>
                      <div className="address-action">
                        <span>Sửa</span>
                      </div>
                    </li>
                  );
                }
              )}
              <li
                className="add-address"
                onClick={() => setType(TYPE.ADD)}
              >
                + Thêm địa chỉ
              </li>
            </ul>
          </div>
          <div className="address-new">{renderFormAddress()}</div>
        </div>
      </div>
    </Loading>
  );
}
