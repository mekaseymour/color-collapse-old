import types from '../actionTypes';

const initialState = {
  board: {
    pieces: [],
  },
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GENERATE_BOARD:
      return payload;
    case types.UPDATE_BOARD:
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
