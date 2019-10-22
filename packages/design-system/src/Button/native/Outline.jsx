import React from 'react';
import styled from 'styled-components/native';
import { node, bool } from 'prop-types';

import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelOutline = styled(Label)`
  ${({
    disabled,
    pressed,
    inverted,
    theme: {
      colors: { white, gray },
      components: {
        button: {
          types: {
            outline: {
              backgroundColor: { pressed: pressedBackgroundColor },
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
  }) => `
    color: ${enabledTextColor};

    ${disabled ? `color: ${disabledTextColor};` : ''}
    ${!disabled && pressed ? `color: ${pressedTextColor};` : ''}

    ${
      inverted && !disabled
        ? `
        color: ${white};
        ${!disabled && pressed ? `color: ${pressedBackgroundColor};` : ''}
      `
        : ''
    }

    ${inverted && pressed ? `color: ${gray[2]}` : ''}
  `}
`;

const ButtonContainerOutline = styled(ButtonContainer)`
  ${({
    pressed,
    disabled,
    inverted,
    theme: {
      colors: { white, gray },
      components: {
        button: {
          types: {
            outline: {
              backgroundColor: {
                disabled: disabledBackgroundColor,
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
  }) => `
    background-color: ${enabledBackgroundColor};
    border-color: ${enabledTextColor};

    ${
      !disabled && pressed
        ? `
      background-color: ${pressedBackgroundColor};
      border-color: ${pressedTextColor};
    `
        : ''
    }

    ${
      disabled
        ? `
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledTextColor};
    `
        : ''
    }

    ${
      inverted && !disabled
        ? `
        background-color: transparent;
        border-color: ${white};
      `
        : ''
    }

    ${inverted && pressed ? `border-color: ${gray[2]}` : ''}
  `}
`;

const ButtonOutline = ({
  children,
  full,
  disabled,
  small,
  pressed,
  inverted,
  ...rest
}) => (
  <ButtonContainerOutline
    {...rest}
    full={full}
    disabled={disabled}
    small={small}
    pressed={pressed}
    inverted={inverted}
  >
    <LabelOutline disabled={disabled} pressed={pressed} inverted={inverted}>
      {children}
    </LabelOutline>
  </ButtonContainerOutline>
);

ButtonOutline.propTypes = {
  children: node,
  full: bool,
  disabled: bool,
  small: bool,
  pressed: bool,
  inverted: bool,
};

ButtonOutline.defaultProps = {
  children: 'Gympass',
  full: false,
  disabled: false,
  small: false,
  pressed: false,
  inverted: false,
};

export default withTouchable(ButtonOutline);
