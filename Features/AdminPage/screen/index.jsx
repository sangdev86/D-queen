import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../components/reducer/actions';
import ProductsManager from './ProductsManager';

export default function AdminPage() {
  const [content, setContent] = useState('Sản Phẩm');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);
  const checkAtive = (item) => {
    if (item !== content) return '';
    return ' active ';
  };
  return (
    <div id="admin-page">
      <div className="navigation-admin">
        <ul>
          {[
            'Sản Phẩm',
            'Người dùng',
            'Quản trị viên',
            'Đơn hàng',
            'Nhóm Phân Quyền',
            'Phân Quyền'
          ].map((item, index) => (
            <li
              className={checkAtive(item)}
              key={index}
              onClick={() => setContent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="content-admin">
        {(() => {
          switch (content) {
            case 'Sản Phẩm':
              return <ProductsManager />;

            default:
              return (
                <div className="loading">
                  'Hệ thống đang cập nhật!'
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}
