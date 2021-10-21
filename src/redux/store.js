import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './modules';

// Note: disable dev-tools and logs in Production mode
const middlewares = [ReduxThunk, ReduxLogger];
const createWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares));

const makeStore = createStore(reducer, {}, createWithMiddleware);

export default makeStore;
