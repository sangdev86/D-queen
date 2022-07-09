import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../components/reducer/actions';
import { TYPE_HOME } from '../../Features/Home/reducer/actions';
import ListProduct from '../../Features/Home/screen/ListProduct';
import { wrapper } from '../../store';

export default function () {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);
  return <ListProduct />;
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(TYPE_HOME.getAllProducts());
  }
);
