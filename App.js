import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Homescreen, Gamescreen } from './src/components';
import Store from './src/Store.js';

const RootStack = createStackNavigator(
  {
    Home: Homescreen,
    Game: Gamescreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <RootStack />
      </Provider>
    );
  }
}
