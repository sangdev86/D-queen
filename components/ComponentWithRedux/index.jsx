import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/rootReducer';

function ComponentWithRedux({
  component: Component,
  state: state,
  ...props
}) {
  const functionState = () => {
    const result = {};
    state.forEach((el) => (result[`${el}`] = props[`${el}`]));
    return result;
  };

  // console.log('fsfs', props[state]);
  return <Component {...functionState()} />;
}

export default connect(mapStateToProps, null)(ComponentWithRedux);
