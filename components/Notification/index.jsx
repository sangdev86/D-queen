import React from 'react';
import { AiTwotoneNotification } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../reducer/actions';

export const TYPE_NOTIFICATION = {
  success: 'success',
  warning: 'warning',
  error: 'error'
};
export default function Notification() {
  const notification = useSelector(
    (state) => state.actions.notification
  );
  const dispatch = useDispatch();
  const { status, message, ms } = notification;

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(ACTIONS.ntf(null));
    }, ms);
  });
  return (
    <div id="notification">
      {message && status !== false ? (
        <div className="wrapper-notification">
          <span className={status}>
            <AiTwotoneNotification />
            <span className="content">{message}</span>
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
