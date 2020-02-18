import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';

const getStyles = (size, color) =>
  StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: size / 2,
      borderRightWidth: size / 2,
      borderBottomWidth: size,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
    },
    triangleDown: {
      transform: [{ rotate: '180deg' }],
    },
  });

const Indicator = ({ direction, size, color, style }) => {
  const styles = getStyles(size, color);

  const indicator = {
    up: <View style={[styles.triangle, style]} />,
    down: <View style={[styles.triangle, styles.triangleDown, style]} />,
  };

  return direction ? indicator['up'] : null;
};

Indicator.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default Indicator;
