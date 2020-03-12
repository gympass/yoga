import React, { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Animated, TouchableWithoutFeedback } from 'react-native';

const SwitchTrack = styled.View`
  ${({
    theme: {
      yoga: {
        components: { checkboxswitch },
      },
    },
    checked,
    disabled,
  }) =>
    `
    display: flex;
    justify-content: center;
    width: ${checkboxswitch.track.width}px;
    height: ${checkboxswitch.track.height}px;
    borderRadius: ${checkboxswitch.track.radii}px;
    background-color: ${
      checked
        ? checkboxswitch.track.checked.backgroundColor
        : checkboxswitch.track.backgroundColor
    };

    ${
      disabled
        ? `
        background-color: ${checkboxswitch.track.disabled.backgroundColor};`
        : ''
    }
  `};
`;

const SwitchThumb = styled.View`
  ${({
    theme: {
      yoga: {
        components: { checkboxswitch },
      },
    },
    disabled,
  }) =>
    `
  width: ${checkboxswitch.thumb.width}px;
  height: ${checkboxswitch.thumb.height}px;
  border-radius: ${checkboxswitch.thumb.radii};
  background-color: ${checkboxswitch.thumb.backgroundColor};

  ${
    disabled
      ? `
      background-color: ${checkboxswitch.thumb.disabled.backgroundColor};`
      : ``
  }
`};
`;

const CheckboxSwitch = ({
  checked,
  disabled,
  theme: {
    yoga: {
      components: { checkboxswitch },
    },
  },
  onChange,
  ...rest
}) => {
  const [thumbPosition] = useState(new Animated.Value(checked));
  const thumbTo =
    checkboxswitch.track.width -
    checkboxswitch.thumb.width -
    checkboxswitch.thumb.left;
  const thumbFrom = checkboxswitch.thumb.left;

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
                checkboxswitch.track.checked.backgroundColor,
                checkboxswitch.track.backgroundColor,
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
