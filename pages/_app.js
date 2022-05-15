import Layout from '../Layout';
import { wrapper } from '../store';
import '../Assets/styles/main.scss';
import React from 'react';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute(
        'data-theme',
        localStorage.getItem('theme') || 'one'
      );
  });
  return <Layout props={<Component {...pageProps} />} />;
}

export default wrapper.withRedux(MyApp);
