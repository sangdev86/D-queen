import React from 'react';
import { GiChestnutLeaf } from 'react-icons/gi';
import ListCard from '../../../../components/ListCard';
export default function ListProduct() {
  return (
    <div id="list-product" className="custom">
      <div className="container">
        <div className="top-title left">
          <div className="layout-left">
            <span className="icon">
              <GiChestnutLeaf />
            </span>

            <h2>Danh Mục Sản Phẩm</h2>
          </div>
          <div className="layout-right">
            <span className="button-primary-light">
              Tất cả sản phẩm
            </span>
          </div>
        </div>
        <ListCard />
      </div>
    </div>
  );
}
