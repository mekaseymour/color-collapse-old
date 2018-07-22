import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Gamescreen } from './src/components';
import { HomescreenContainer } from './src/containers';
import Store from './src/Store.js';

const RootStack = createStackNavigator(
  {
    Home: HomescreenContainer,
    Game: Gamescreen,
  },
  {
    initialRouteName: 'Home',
  }
);

console.log('store', Store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <RootStack />
      </Provider>
    );
  }
}
