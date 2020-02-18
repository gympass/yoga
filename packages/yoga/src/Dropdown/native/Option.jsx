import { string, any } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  optionText: {
    fontSize: 14,
  },
});

const Option = ({ children, style, styleText }) => (
  <View style={[styles.item, style]}>
    <Text style={[styles.optionText, styleText]}> {children} </Text>
  </View>
);

Option.propTypes = {
  style: any,
  styleText: any,
  children: string.isRequired,
};

Option.defaultProps = {
  style: null,
  styleText: null,
};

export default Option;
