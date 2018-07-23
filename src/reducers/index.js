import { combineReducers } from 'redux';
import board from './board';
import collisionInProgress from './collisionInProgress';

export default combineReducers({
  board: board,
  collisionInProgress: collisionInProgress,
});
