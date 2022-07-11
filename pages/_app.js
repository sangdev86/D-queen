import Layout from '../Layout';
import { wrapper } from '../store';
import '../Assets/styles/main.scss';
import React from 'react';
import App from 'next/app';
import { checkLogin, LOCAL } from '../Assets/utils/local';
import { TYPE_AUTH } from '../Features/Auth/reducer/action';
import { authSlice } from '../Features/Auth/reducer/auth.slice';
import { useDispatch } from 'react-redux';

const MyApp = ({ Component, pageProps }) => {
  // getInitialProps = wrapper.getInitialAppProps(
  //   (store) =>
  //     async ({ Component, ctx }) => {
  //       return {
  //         pageProps: {
  //           // Call page-level getInitialProps
  //           // DON'T FORGET TO PROVIDE STORE TO PAGE
  //           ...(Component.getInitialProps
  //             ? await Component.getInitialProps({ ...ctx, store })
  //             : {}),
  //           // Some custom thing for all pages
  //           pathname: ctx.pathname
  //         }
  //       };
  //     }
  // );
  const dispatch = useDispatch();
  React.useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute(
        'data-theme',
        localStorage.getItem('theme') || 'one'
      );
    if (LOCAL.getAccessToken() && LOCAL.getUser()) {
      dispatch(authSlice.actions.FETCH_LOGIN());
    }
  }, []);

  return <Layout props={<Component {...pageProps} />} />;
};
export default wrapper.withRedux(MyApp);
