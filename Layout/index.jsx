import React, { Fragment } from 'react';
import Footer from './Footer';
import ContentLayout from './Content';
import Header from './Header';

export default function Layout({ props }) {
  return (
    <Fragment>
      <Header />
      <ContentLayout props={props} />
      <Footer />
    </Fragment>
  );
}
