import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../../components/reducer/actions';

import { TYPE_PRODUCT_DETAIL } from '../../Features/ProductDetail/reducer/actions';
import ProductDetail from '../../Features/ProductDetail/screen';
import { wrapper } from '../../store';

export default function ProductID() {
  return <ProductDetail />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(TYPE_PRODUCT_DETAIL.getProductDetail());
  }
);
