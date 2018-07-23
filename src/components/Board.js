import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Piece from './Piece';

const generatePiecesComponents = pieces => {
  return pieces.map((color, index) => {
    return <Piece key={index} color={color} />;
  });
};

const generateBoard = (piecesComponents, boardHeight, boardWidth) => {
  const board = [];
  for (let i = 0; i < boardHeight; i++) {
    const row = [];
    for (let j = 0; j < boardWidth; j++) {
      row.push(piecesComponents[i * boardWidth + j]);
    }
    board.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  }
  return board;
};

const Board = ({ board }) => {
  return (
    <View style={styles.board}>
      {generateBoard(
        generatePiecesComponents(board.pieces),
        board.height,
        board.width
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
