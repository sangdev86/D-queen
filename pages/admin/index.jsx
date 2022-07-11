import React from 'react';
import { useDispatch } from 'react-redux';
import AdminPage from '../../Features/AdminPage/screen';

export default function adminPage() {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   document
  //     .getElementsByTagName('HTML')[0]
  //     .setAttribute(
  //       'data-theme',
  //       localStorage.getItem('theme') || 'one'
  //     );
  //   if (LOCAL.getAccessToken() && LOCAL.getUser()) {
  //     dispatch(authSlice.actions.FETCH_LOGIN());
  //   }
  // }, []);
  return <AdminPage />;
}
