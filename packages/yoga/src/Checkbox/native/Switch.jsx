import React, { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Animated, TouchableWithoutFeedback } from 'react-native';

const SwitchTrack = styled.View`
  ${({
    theme: {
      yoga: {
        components: { checkboxSwitch },
      },
    },
    checked,
    disabled,
  }) =>
    `
    display: flex;
    justify-content: center;
    width: ${checkboxSwitch.track.width}px;
    height: ${checkboxSwitch.track.height}px;
    borderRadius: ${checkboxSwitch.track.radii}px;
    background-color: ${
      checked
        ? checkboxSwitch.track.checked.backgroundColor
        : checkboxSwitch.track.backgroundColor
    };

    ${
      disabled
        ? `
        background-color: ${checkboxSwitch.track.disabled.backgroundColor};`
        : ''
    }
  `};
`;

const SwitchThumb = styled.View`
  ${({
    theme: {
      yoga: {
        components: { checkboxSwitch },
      },
    },
    disabled,
  }) =>
    `
  width: ${checkboxSwitch.thumb.width}px;
  height: ${checkboxSwitch.thumb.height}px;
  border-radius: ${checkboxSwitch.thumb.radii};
  background-color: ${checkboxSwitch.thumb.backgroundColor};

  ${
    disabled
      ? `
      background-color: ${checkboxSwitch.thumb.disabled.backgroundColor};`
      : ``
  }
`};
`;

const CheckboxSwitch = ({
  checked,
  disabled,
  theme: {
    yoga: {
      components: { checkboxSwitch },
    },
  },
  onChange,
  ...rest
}) => {
  const [thumbPosition] = useState(new Animated.Value(checked));
  const thumbTo =
    checkboxSwitch.track.width -
    checkboxSwitch.thumb.width -
    checkboxSwitch.thumb.left;
  const thumbFrom = checkboxSwitch.thumb.left;

  useEffect(() => {
    const toggle = (isChecked, position) => {
      const animValue = {
        fromValue: isChecked ? 0 : 1,
        toValue: isChecked ? 1 : 0,
        duration: 100,
      };
      Animated.timing(position, animValue).start();
    };

    toggle(!checked, thumbPosition);
  }, [checked]);

  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <SwitchTrack
        checked={checked}
        disabled={disabled}
        as={Animated.View}
        style={
          !disabled && {
            backgroundColor: thumbPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [
                checkboxSwitch.track.checked.backgroundColor,
                checkboxSwitch.track.backgroundColor,
              ],
            }),
          }
        }
        {...rest}
      >
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
    </TouchableWithoutFeedback>
  );
};

CheckboxSwitch.propTypes = {
  checked: bool,
  disabled: bool,
  onChange: func,
};

CheckboxSwitch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

CheckboxSwitch.displayName = 'Checkbox.Switch';

export default withTheme(CheckboxSwitch);
