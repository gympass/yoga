import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

const withTouchable = Component => ({
  onPressIn = () => {},
  onPressOut = () => {},
  onChange = () => {},
  onPress = onChange,
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
      onPress={onPress}
      {...rest}
    >
      <View style={{ flexDirection: 'row' }}>
        <Component {...rest} pressed={pressed} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTouchable;
