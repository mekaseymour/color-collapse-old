import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BoardContainer from '../containers/BoardContainer';

const Gamescreen = () => (
  <View style={styles.container}>
    <BoardContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Gamescreen;
