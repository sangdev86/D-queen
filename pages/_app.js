import Layout from '../Layout';
import { wrapper } from '../store';
import '../Assets/styles/main.scss';
import React from 'react';
import App from 'next/app';

class MyApp extends App {
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

  componentDidMount() {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute(
        'data-theme',
        localStorage.getItem('theme') || 'one'
      );
  }

  render() {
    const { Component, pageProps } = this.props;
    console.log('app');

    return <Layout props={<Component {...pageProps} />} />;
  }
}
export default wrapper.withRedux(MyApp);
