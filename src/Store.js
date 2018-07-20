import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools, { composeWithDevTools } from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers';

const INITIAL_STATE = { board: { pieces: [] } };

const middleware = applyMiddleware(promise, thunk, logger);

const Store = createStore(
  RootReducer,
  INITIAL_STATE,
  composeWithDevTools(middleware)
);

console.log('store', Store);
// debugger;

export default Store;
