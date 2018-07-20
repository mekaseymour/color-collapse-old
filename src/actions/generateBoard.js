import { GENERATE_BOARD } from '../utils/actionTypes';

import startingBoard from '../utils/startingBoard';

const generateBoard = props => dispatch => {
  const { navigate } = props.navigation;

  navigate('Game');

  return dispatch({
    type: GENERATE_BOARD,
    payload: startingBoard(),
  });
};

export default generateBoard;
