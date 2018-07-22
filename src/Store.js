import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers';

const INITIAL_STATE = { board: { pieces: [], height: 0, width: 0 } };

const middleware = applyMiddleware(promise, thunk, logger);
const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });

const enhancer = compose(
  middleware,
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678,
  })
);

const Store = createStore(RootReducer, INITIAL_STATE, enhancer);

export default Store;
