import React from 'react';
import ComponentWithRedux from '../../components/ComponentWithRedux';
import Modal from '../../components/Modal';

export default function ContentLayout({ props }) {
  return (
    <div id="content-layout">
      <Modal />
      {props}
    </div>
  );
}
