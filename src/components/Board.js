import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Board = ({ board }) => {
  <View style={styles.board}>
    <Text>This is the game screen.</Text>
    {board}
  </View>;
};

const styles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Board;
