import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../components/reducer/actions';
import ListProduct from '../../Features/Home/screen/ListProduct';

export default function () {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(ACTIONS.loadingPage(false));
  }, []);
  return <ListProduct />;
}
