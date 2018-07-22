import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { mapSymbolToColor } from '../utils/colorMapping';

const Piece = ({ color }) => (
  <View style={styles(mapSymbolToColor(color)).container} />
);

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
