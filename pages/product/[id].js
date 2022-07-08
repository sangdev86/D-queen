import React from 'react';
import { TYPE_PRODUCT_DETAIL } from '../../Features/ProductDetail/reducer/actions';
import ProductDetail from '../../Features/ProductDetail/screen';
import { wrapper } from '../../store';

export default function ProductID() {
  return <ProductDetail />;
}

export const getStaticPaths = async () => {
  const paths = TYPE_PRODUCT_DETAIL.getAllSlugOfProducts();
  return paths;
};
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(
        TYPE_PRODUCT_DETAIL.getProductDetail(params.id)
      );
    }
);
