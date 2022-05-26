import { actionSlice } from '../components/reducer/actions.slice';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  actions: actionSlice.reducer
});
export default rootReducer;

// comment line
export const storeState = {
  actions: actionSlice.reducer
};

export const mapStateToProps = (state = storeState) => {
  return {
    store: state,
    actions: state.actions
  };
};
