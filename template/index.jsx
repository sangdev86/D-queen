import React, { Fragment } from 'react';

import AdminTemplate from './adminTemplate';
import UserTemplate from './userTemplate';

export default function Template({ props }) {
  const isAdmin = false;
  console.log('Template', props);
  return (
    <Fragment>
      {isAdmin ? (
        <AdminTemplate props={props} />
      ) : (
        <UserTemplate props={props} />
      )}
    </Fragment>
  );
}
