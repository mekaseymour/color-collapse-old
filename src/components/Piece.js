import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';

import { mapSymbolToColor } from '../utils/colorMapping';

class Piece extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        console.log('evt inside onPanResponderGrant', evt);
        console.log('gestureState inside onPanResponderGrant', gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        console.log('evt inside onPanResponderMove', evt);
        console.log('gestureState inside onPanResponderMove', gestureState);
      },
    });
  }

  render() {
    return (
      <View
        style={styles(mapSymbolToColor(this.props.color)).container}
        {...this.panResponder.panHandlers}
      />
    );
  }
}

const styles = color =>
  StyleSheet.create({
    container: {
      backgroundColor: color,
      height: 50,
      width: 50,
      borderRadius: 50,
      margin: 7,
    },
  });

export default Piece;
