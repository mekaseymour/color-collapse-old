import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View, PanResponder, Animated } from 'react-native';

import { mapSymbolToColor } from '../utils/colorMapping';
import handleCollision from '../actions/handleCollision';

class Piece extends Component {
  constructor(props) {
    super();
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    onCollide: PropTypes.func.isRequired,
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
        // // gestureState.d{x,y} will be set to zero now
        // console.log('evt inside onPanResponderGrant', evt);
        // console.log('gestureState inside onPanResponderGrant', gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        // console.log('evt inside onPanResponderMove', evt);
        // console.log('gestureState inside onPanResponderMove', gestureState);

        // if moveY more than 40 pts less than y0, check if piece to the bottom is match
        if (gestureState.moveY - gestureState.y0 > 40) {
          // console.log('check for match with piece below');
          this.props.onCollide('down');
        }

        // if moveY more than 40 pts greater than y0, check if piece to the top is match
        if (gestureState.y0 - gestureState.moveY > 40) {
          // console.log('check for match with piece above');
          this.props.onCollide('up');
        }

        // if moveX more than 40 pts less than x0, check if piece to the right is match
        if (gestureState.moveX - gestureState.x0 > 40) {
          this.props.onCollide('right');
        }

        // if moveX more than 40 pts greater than x0, check if piece to the left is match
        if (gestureState.x0 - gestureState.moveX > 40) {
          this.props.onCollide('left');
        }
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

const mapDispatchToProps = (dispatch, props) => ({
  onCollide: direction => dispatch(handleCollision(props.id, direction)),
});

const PieceContainer = connect(null, mapDispatchToProps)(Piece);

export default PieceContainer;
