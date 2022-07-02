import React from 'react';
import { useSelector } from 'react-redux';

export default function Loading({ loadingComponent, children }) {
  const loadingPage = useSelector(
    (state) => state.actions.loadingPage
  );
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const findByKey = (name) => {
    if (!Array.isArray(children)) return children;
    children.map((child) => {
      if (child.key === name) {
        return child;
      }
      return null;
    });
  };
  return (
    <div id="loading">
      {loadingPage && !loadingComponent ? (
        <div className="loading-page">
          <div className="loading-item">
            <img src="/image/logo-small.png" alt="logo nho" />
            <div className="loader"></div>
          </div>
        </div>
      ) : null}
      {loadingComponent ? (
        <div className="loading-component">
          <div className="loading-item">
            <div className="loader"></div>
          </div>
          {findByKey('item')}
        </div>
      ) : (
        findByKey('item')
      )}
    </div>
  );
}
