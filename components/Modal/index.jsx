import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeState } from '../../store/rootReducer';
import { ACTIONS } from '../reducer/actions';

export default function Modal() {
  const modal = useSelector(
    (state = storeState) => state.actions.modal
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (modal.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal.open]);

  return (
    <div id="modal">
      {modal.open ? (
        <div className="over-play-wrapper">
          <div className="modal-item">
            {modal.data}
            <div
              className="close"
              onClick={() => dispatch(ACTIONS.modal(false))}
            >
              X
            </div>
          </div>
          <div
            className="over-play"
            onClick={() => dispatch(ACTIONS.modal(false))}
          ></div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
