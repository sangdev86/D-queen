import React from 'react';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Notification from '../../components/Notification';

export default function ContentLayout({ props }) {
  return (
    <div id="content-layout">
      <Modal />
      <Loading />
      <Notification />
      {props}
    </div>
  );
}
