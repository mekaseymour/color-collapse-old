import { GENERATE_BOARD } from '../utils/actionTypes';
import { UPDATE_BOARD } from '../utils/actionTypes';

const initialState = {
  board: {
    pieces: [],
  },
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GENERATE_BOARD:
      return payload;
    case UPDATE_BOARD:
      return Object.assign({}, state, {
        board: {
          pieces: [],
        },
      });
    default:
      console.log('going to return default state');
      return state;
  }
}
