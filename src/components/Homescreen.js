import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Homescreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button onPress={() => navigate('Game')} title="PLAY" color="#1194f6" />
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
});

export default Homescreen;
