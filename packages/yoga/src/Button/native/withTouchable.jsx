import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const withTouchable = Component => ({
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  onChange = () => {},
  accessibilityRole = undefined,
  ...rest
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={e => {
        setPressed(true);
        onPressIn(e);
      }}
      onPressOut={e => {
        setPressed(false);
        onPressOut(e);
      }}
      onPress={e => {
        onPress(e);
        onChange(e);
      }}
      accessibilityRole={accessibilityRole}
      {...rest}
    >
      <View style={{ flexDirection: 'row' }}>
        <Component {...rest} pressed={pressed} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTouchable;
