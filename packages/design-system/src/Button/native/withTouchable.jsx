import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const withTouchable = Component => ({
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
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
      <Component {...rest} pressed={pressed} />
    </TouchableWithoutFeedback>
  );
};

export default withTouchable;
