import React from 'react';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

export default function ContentLayout({ props }) {
  return (
    <div id="content-layout">
      <Modal />
      <Loading />
      {props}
    </div>
  );
}
