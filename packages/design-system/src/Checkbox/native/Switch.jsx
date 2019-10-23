import React, { useEffect, useState } from 'react';
import { bool } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Animated } from 'react-native';

const SwitchTrack = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  ${({
    theme: {
      components: {
        switch: {
          track: {
            width: trackWidth,
            height: trackHeight,
            radii: trackRadii,
            backgroundColor: trackBackgroundColor,
            checked: { backgroundColor: checkedBackgroundColor },
            disabled: { backgroundColor: disabledBackgroundColor },
          },
        },
      },
    },
    checked,
    disabled,
  }) =>
    `
    display: flex;
    justify-content: center;
    width: ${trackWidth}px;
    height: ${trackHeight}px;
    borderRadius: ${trackRadii}px;
    background-color: ${
      checked ? checkedBackgroundColor : trackBackgroundColor
    };

    ${
      disabled
        ? `
        background-color: ${disabledBackgroundColor};`
        : ''
    }
  `};
`;

const SwitchThumb = styled.View`
  ${({
    theme: {
      components: {
        switch: {
          thumb: {
            width: thumbWidth,
            height: thumbHeight,
            shadow: thumbShadow,
            left: thumbLeft,
            radii: thumbRadii,
            backgroundColor: thumbBackgroundColor,
            disabled: { backgroundColor: disabledBackgroundColor },
          },
        },
      },
    },
    disabled,
  }) =>
    `
  width: ${thumbWidth}px;
  height: ${thumbHeight}px;
  border-radius: ${thumbRadii};
  background-color: ${thumbBackgroundColor};
  
  ${
    disabled
      ? `
      background-color: ${disabledBackgroundColor};`
      : ``
  }
`};
`;

/** The Switch is a kind of Checkbox  */
const Switch = ({
  checked,
  disabled,
  theme: {
    components: {
      switch: {
        track: { width: trackWidth },
        thumb: { width: thumbWidth, left: thumbLeft },
      },
    },
  },
  ...rest
}) => {
  const [thumbPosition] = useState(new Animated.Value(checked));
  const thumbTo = trackWidth - thumbWidth - thumbLeft;
  const thumbFrom = thumbLeft;

  useEffect(() => {
    const toggle = (checked, position) => {
      const animValue = {
        fromValue: checked ? 0 : 1,
        toValue: checked ? 1 : 0,
        duration: 100,
      };
      Animated.timing(position, animValue).start();
    };

    toggle(!checked, thumbPosition);
  }, [checked]);

  return (
    <SwitchTrack checked={checked} disabled={disabled} {...rest}>
      <SwitchThumb
        checked={checked}
        disabled={disabled}
        as={Animated.View}
        style={{
          transform: [
            {
              translateX: thumbPosition.interpolate({
                inputRange: [0, 1],
                outputRange: [thumbTo, thumbFrom],
              }),
            },
          ],
        }}
      />
    </SwitchTrack>
  );
};

Switch.propTypes = {
  checked: bool,
  disabled: bool,
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
};

export default withTheme(Switch);
