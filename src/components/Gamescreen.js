import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Gamescreen = () => (
  <View style={styles.container}>
    <Text>This is the game screen.</Text>
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
