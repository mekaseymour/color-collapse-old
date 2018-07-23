import types from '../actionTypes';

import startingBoard from '../utils/startingBoard';

const generateBoard = props => dispatch => {
  const { navigate } = props.navigation;

  navigate('Game');

  return dispatch({
    type: types.GENERATE_BOARD,
    payload: { pieces: startingBoard(), height: 2, width: 2 },
  });
};

export default generateBoard;
