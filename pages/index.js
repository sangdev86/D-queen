import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../components/reducer/actions';
import { TYPE_HOME } from '../Features/Home/reducer/actions';
import Home from '../Features/Home/screen';
import { wrapper } from '../store';

export default function HomePage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);
  return <Home />;
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(TYPE_HOME.getAllProducts());
  }
);
