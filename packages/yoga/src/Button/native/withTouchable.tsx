import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { element } from 'prop-types';
import type { GestureResponderEvent } from 'react-native';

function withTouchable(
  Component: React.FC<{
    pressed?: boolean;
    full?: boolean;
    disabled?: boolean;
    small?: boolean;
    inverted?: boolean;
    secondary?: boolean;
    icon?: boolean | React.ReactNode;
  }>,
) {
  const WithTouchable = ({
    onPressIn,
    onPressOut,
    onChange,
    onPress = onChange,
    ...rest
  }: Omit<
    React.ComponentProps<typeof TouchableWithoutFeedback>,
    'onPressIn' | 'onPressOut' | 'onPress'
  > & {
    onPressIn?: ((event: GestureResponderEvent) => void) | undefined | any;
    onPressOut?: ((event: GestureResponderEvent) => void) | undefined | any;
    onChange?: ((event: GestureResponderEvent) => void) | undefined | any;
    onPress?: ((event: GestureResponderEvent) => void) | undefined | any;
    children?: React.ReactNode;
    // TODO Use system typings
    [key: string]: any;
  }) => {
    const [pressed, setPressed] = useState(false);

    return (
      <TouchableWithoutFeedback
        onPressIn={e => {
          setPressed(true);
          onPressIn?.(e);
        }}
        onPressOut={e => {
          setPressed(false);
          onPressOut?.(e);
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
    ...Component.propTypes,
  };

  return WithTouchable;
}

withTouchable.propTypes = {
  Component: element,
};

export default withTouchable;
