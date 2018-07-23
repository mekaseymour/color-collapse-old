import types from '../actionTypes';
import {
  collapsableCombinations,
  collisionResults,
} from '../utils/colorCombinations';
import {
  pieceIsFirstInRow,
  pieceIsLastInRow,
  getPieceTouchingToLeft,
  getPieceTouchingToRight,
  getPieceTouchingToTop,
  getPieceTouchingToBottom,
} from '../utils/pieceRelationships';

const getPieceToCollideWith = (direction, pieceLocation, board) => {
  const mapping = {
    left: getPieceTouchingToLeft(pieceLocation, board),
    right: getPieceTouchingToRight(pieceLocation, board),
    up: getPieceTouchingToTop(pieceLocation, board),
    down: getPieceTouchingToBottom(pieceLocation, board),
  };

  return mapping[direction];
};

const collisionIsValid = (piece, collisionPiece, board) => {
  const pieceColor = board.pieces[piece];
  const collisionColor = board.pieces[collisionPiece];

  const validCollisionPieces = collapsableCombinations[pieceColor];

  if (validCollisionPieces.indexOf(collisionColor) > -1) {
    return true;
  }

  return false;
};

const updateBoardAfterCollision = (
  { pieces },
  pieceLocation,
  collisionPieceLocation,
  collisionResult
) => {
  const board = pieces;

  board[pieceLocation] = 'empty';

  // replace collision piece with collision result
  board[collisionPieceLocation] = collisionResult;

  return board;
};

const handleCollision = (pieceId, direction) => (dispatch, getState) => {
  const state = getState();
  const board = state.board;

  if (!state.collisionInProgress) {
    const pieceToCollideWith = getPieceToCollideWith(direction, pieceId, board);

    if (pieceToCollideWith) {
      if (collisionIsValid(pieceId, pieceToCollideWith, board)) {
        dispatch({
          type: types.START_COLLISION,
        });
        const piece = board.pieces[pieceId];
        const collisionPiece = board.pieces[pieceToCollideWith];

        const collisionResult = collisionResults[piece][collisionPiece];
        console.log('collisionResult', collisionResult);

        const updatedPieces = updateBoardAfterCollision(
          board,
          pieceId,
          pieceToCollideWith,
          collisionResult
        );

        // FIGURE OUT HOW NOT TO PASS BOARD HEIGHT AND WIDTH (too much room for error)

        const updatedBoard = {
          pieces: updatedPieces,
          height: board.height,
          width: board.width,
        };

        dispatch({
          type: types.UPDATE_BOARD,
          payload: updatedBoard,
        });

        return dispatch({
          type: types.END_COLLISION,
        });
      }
    }
  }
};

export default handleCollision;
