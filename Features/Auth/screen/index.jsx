import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkLogin } from '../../../Assets/utils/local';
import { viewportToPixels } from '../../../Assets/utils/viewportToPixels';
import Loading from '../../../components/Loading';
import NoneProfile from './NoneProfile';
import Profile from './Profile';

export default function Auth() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loadingAuth = useSelector((state) => state.auth.loadingAuth);
  const authWrapper = useRef();

  const [scroll, setScroll] = useState('none-scroll');
  React.useEffect(() => {
    const height = authWrapper.current.offsetHeight;

    if (Math.abs(height - viewportToPixels('80vh')) <= 2) {
    }
  }, []);

  return (
    <Loading loadingComponent={loadingAuth}>
      <div id="auth" key="item">
        <div className="auth-wrapper" ref={authWrapper}>
          {isLogin && checkLogin() ? <Profile /> : <NoneProfile />}
        </div>
      </div>
    </Loading>
  );
}
