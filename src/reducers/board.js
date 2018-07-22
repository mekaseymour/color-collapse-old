import types from '../actionTypes';

const initialState = {
  board: {
    pieces: [],
    height: 0,
    width: 0,
  },
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GENERATE_BOARD:
      return {
        pieces: payload.pieces,
        height: payload.height,
        width: payload.width,
      };
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
