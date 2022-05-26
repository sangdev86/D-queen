import React from 'react';
import './_modal.scss';
export default function Modal({ props }) {
  return (
    <div id="modal">
      <div className="over-play">{props}</div>
    </div>
  );
}
