import React, { useEffect, useState } from 'react';
import { bool } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { Animated } from 'react-native';

import withTouchable from '../../Button/native/withTouchable';
import Box from '../../Box';

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

const ThumbShadow = styled.View(
  ({
    theme: {
      yoga: {
        colors,
        components: { checkboxswitch },
      },
    },
    checked,
  }) => {
    const width = checkboxswitch.thumb.width * checkboxswitch.thumb.shadowScale;
    const height =
      checkboxswitch.thumb.height * checkboxswitch.thumb.shadowScale;

    return `
      width: ${width}px;
      height: ${height}px;
      position: absolute;
      background-color: ${
        checked
          ? hexToRgb(colors.primary, 0.75)
          : hexToRgb(colors.elements.backgroundAndDisabled, 0.75)
      };
      border-radius: ${checkboxswitch.thumb.radii}px;
    `;
  },
);

const SwitchThumb = styled(Box).attrs(
  ({
    theme: {
      yoga: {
        components: { checkboxswitch },
      },
    },
    disabled,
  }) => ({
    width: checkboxswitch.thumb.width,
    height: checkboxswitch.thumb.height,
    borderRadius: checkboxswitch.thumb.radii,
    bgColor: disabled
      ? checkboxswitch.thumb.disabled.backgroundColor
      : checkboxswitch.thumb.backgroundColor,
    elevation: checkboxswitch.thumb.shadow,
  }),
)``;

const CheckboxSwitch = ({
  checked = false,
  pressed = false,
  disabled = false,
  theme: {
    yoga: {
      components: { checkboxswitch },
    },
  },
}) => {
  const [thumbPosition] = useState(new Animated.Value(Number(checked)));
  const thumbTo =
    checkboxswitch.track.width -
    checkboxswitch.thumb.width -
    checkboxswitch.thumb.left;
  const thumbFrom = checkboxswitch.thumb.left;

  const shadowDiameter =
    checkboxswitch.thumb.width * checkboxswitch.thumb.shadowScale;
  const shadowAndThumbDiff = shadowDiameter - checkboxswitch.thumb.width;
  const halfDiff = shadowAndThumbDiff / 2;

  const thumbShadowFrom = (halfDiff - checkboxswitch.thumb.left) * -1;
  const thumbShadowTo = thumbTo - halfDiff;

  useEffect(() => {
    const toggle = (isChecked, position) => {
      const animValue = {
        fromValue: isChecked ? 0 : 1,
        toValue: isChecked ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      };

      Animated.timing(position, animValue).start();
    };

    toggle(!checked, thumbPosition);
  }, [checked]);

  return (
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
    >
      {pressed && !disabled && (
        <ThumbShadow
          checked={checked}
          as={Animated.View}
          style={{
            transform: [
              {
                translateX: thumbPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [thumbShadowTo, thumbShadowFrom],
                }),
              },
            ],
          }}
        />
      )}
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

CheckboxSwitch.propTypes = {
  checked: bool,
  disabled: bool,
  pressed: bool,
};

CheckboxSwitch.displayName = 'Checkbox.Switch';

export default withTouchable(withTheme(CheckboxSwitch));
