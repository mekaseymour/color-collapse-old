import { UPDATE_BOARD } from '../utils/actionTypes';

const initialState = {
  board: {
    pieces: [],
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOARD:
      return Object.assign({}, state, {
        board: {
          pieces: [],
        },
      });
    default:
      return state;
  }
}
