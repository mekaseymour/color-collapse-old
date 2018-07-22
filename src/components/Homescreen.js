import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Homescreen = ({ navigation, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Collapse</Text>
      <Button onPress={onPress} title="PLAY" color="#1194f6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default Homescreen;
