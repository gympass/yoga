import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { element, func } from 'prop-types';

const withTouchable = Component => {
  const WithTouchable = ({
    onPressIn,
    onPressOut,
    onChange,
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

  WithTouchable.propTypes = {
    onPressIn: func,
    onPressOut: func,
    onChange: func,
    onPress: func,
  };

  WithTouchable.defaultProps = {
    onPressIn: () => {},
    onPressOut: () => {},
    onChange: undefined,
    onPress: undefined,
  };

  return WithTouchable;
};

withTouchable.propTypes = {
  Component: element,
};

export default withTouchable;
