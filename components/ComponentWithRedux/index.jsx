import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/reducers';

function ComponentWithRedux({
  component: Component,
  state: state,
  ...props
}) {
  return <Component state={state} {...props} />;
}

export default connect(mapStateToProps, null)(ComponentWithRedux);
