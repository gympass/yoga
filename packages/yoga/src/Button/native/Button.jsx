import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';
import withTouchable from './withTouchable';

const Label = styled.Text`
  text-align: center;
  ${({
    disabled,
    pressed,
    inverted,
    theme: {
      yoga: {
        components: {
          button: {
            font: { size, weight },
            types: {
              contained: {
                backgroundColor: {
                  enabled: enabledBackgroundColor,
                  pressed: pressedBackgroundColor,
                },
                textColor: {
                  disabled: disabledTextColor,
                  enabled: enabledTextColor,
                  pressed: pressedTextColor,
                },
              },
            },
          },
        },
      },
    },
  }) => `
      font-size: ${size};
      font-weight: ${weight};
      color: ${enabledTextColor};

      ${disabled ? `color: ${disabledTextColor};` : ''}
      ${!disabled && pressed ? `color: ${pressedTextColor};` : ''}

      ${
        inverted && !disabled
          ? `
        color: ${enabledBackgroundColor};

        ${!disabled && pressed ? `color: ${pressedBackgroundColor};` : ''}
      `
          : ''
      }
    `}
`;

const ButtonContainer = styled.View`
  ${({
    pressed,
    disabled,
    full,
    small,
    inverted,
    theme: {
      yoga: {
        components: {
          button: {
            padding: { left: paddingLeft, right: paddingRight },
            height: { normal: normalHeight, small: smallHeight },
            border: {
              small: { width: smallWidth },
              default: { width: defaultWidth },
              radius,
            },
            types: {
              contained: {
                backgroundColor: {
                  disabled: disabledBackgroundColor,
                  enabled: enabledBackgroundColor,
                  pressed: pressedBackgroundColor,
                },
                textColor: { enabled: enabledTextColor },
              },
            },
          },
        },
      },
    },
  }) => `
      background-color: ${enabledBackgroundColor};
      border: ${
        small ? smallWidth : defaultWidth
      }px solid ${enabledBackgroundColor};
      border-radius: ${radius}px;
      height: ${small ? smallHeight : normalHeight};
      justify-content: center;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
      ${full ? 'width: 100%;' : ''}

      ${
        !disabled && pressed
          ? `
        background-color: ${pressedBackgroundColor};
        border-color: ${pressedBackgroundColor};
      `
          : ''
      }

      ${
        disabled
          ? `
        background-color: ${disabledBackgroundColor};
        border-color: ${disabledBackgroundColor};
      `
          : ''
      }

      ${
        inverted && !disabled
          ? `
          background-color: ${enabledTextColor};
          border-color: ${enabledTextColor};
        `
          : ''
      }
    `}
`;

/** Buttons make common actions more obvious and help users more easily perform
them. Buttons use labels and sometimes icons to communicate the action that will
occur when the user touches them. */
const Button = ({
  children,
  full,
  disabled,
  small,
  pressed,
  inverted,
  ...rest
}) => (
  <ButtonContainer
    {...rest}
    full={full}
    pressed={pressed}
    disabled={disabled}
    small={small}
    inverted={inverted}
  >
    <Label disabled={disabled} pressed={pressed} inverted={inverted}>
      {children}
    </Label>
  </ButtonContainer>
);

Button.propTypes = {
  children: node,
  full: bool,
  disabled: bool,
  small: bool,
  pressed: bool,
  inverted: bool,
};

Button.defaultProps = {
  children: 'Button',
  full: false,
  disabled: false,
  small: false,
  pressed: false,
  inverted: false,
};

const ButtonWithTouchable = withTouchable(Button);

export { Label, ButtonContainer, ButtonWithTouchable as default };
