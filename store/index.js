import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhances =
  process.env.NODE_ENV != 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhances(applyMiddleware(thunk));
//add  routerMiddleware(history)

// nextjs
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const store = () => createStore(reducer, enhancer);
// nextjs
export const wrapper = createWrapper(store);
