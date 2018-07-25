import types from '../actionTypes';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case types.START_COLLISION:
      return true;
    case types.END_COLLISION:
      return false;
    default:
      return false;
  }
}
