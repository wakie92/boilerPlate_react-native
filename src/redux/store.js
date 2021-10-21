import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducer from './modules';

// Note: disable dev-tools and logs in Production mode
const middlewares = [ReduxThunk, ReduxLogger];
const createWithMiddleware = applyMiddleware(...middlewares);

const makeStore = initialState => {
  return createStore(reducer, initialState, createWithMiddleware);
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
