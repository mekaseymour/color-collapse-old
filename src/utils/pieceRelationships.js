const pieceIsFirstInRow = (pieceLocation, boardWidth) => {
  return pieceLocation === 0 || pieceLocation % boardWidth === 0;
};

const pieceIsLastInRow = (pieceLocation, boardWidth) => {
  return (pieceLocation + 1) % boardWidth === 0;
};

const getPieceTouchingToLeft = (pieceLocation, { pieces, width }) => {
  if (pieces[pieceLocation - 1] && !pieceIsFirstInRow(pieceLocation, width)) {
    return pieceLocation - 1;
  }

  return null;
};

const getPieceTouchingToRight = (pieceLocation, { pieces, width }) => {
  if (pieces[pieceLocation + 1] && !pieceIsLastInRow(pieceLocation, width)) {
    return pieceLocation + 1;
  }

  return null;
};

const getPieceTouchingToTop = (pieceLocation, { pieces, width }) => {
  if (pieces[pieceLocation - width]) {
    return pieceLocation - width;
  }

  return null;
};

const getPieceTouchingToBottom = (pieceLocation, { pieces, width }) => {
  if (pieces[pieceLocation + width]) {
    return pieceLocation + width;
  }

  return null;
};

const getTouchingPieces = (pieceLocation, { pieces, width }) => {
  const touchingPieces = [];

  // if piece is not first in row check touching piece directly to left
  if (pieces[pieceLocation - 1] && !pieceIsFirstInRow(pieceLocation, width)) {
    touchingPieces.push(pieceLocation - 1);
  }

  // if piece is not last in row check touching piece directly to right
  if (pieces[pieceLocation + 1] && !pieceIsLastInRow(pieceLocation, width)) {
    touchingPieces.push(pieceLocation + 1);
  }

  // check piece touching to the top
  if (pieces[pieceLocation - width]) {
    touchingPieces.push(pieceLocation - width);
  }

  // check piece touching to the bottom
  if (pieces[pieceLocation + width]) {
    touchingPieces.push(pieceLocation + width);
  }

  return touchingPieces;
};

export {
  pieceIsFirstInRow,
  pieceIsLastInRow,
  getPieceTouchingToLeft,
  getPieceTouchingToRight,
  getPieceTouchingToTop,
  getPieceTouchingToBottom,
  getTouchingPieces,
};
