import React from 'react';
import { node, func, bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

const StyledButton = styled.button`
  box-sizing: border-box;

  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  ${({
    full,
    small,
    inverted,
    theme: {
      yoga: {
        components: {
          button: {
            padding: { left: paddingLeft, right: paddingRight },
            height: { small: smallHeight, normal: normalHeight },
            font: { size, weight },
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
      width: ${full ? '100%' : 'auto'};
      height: ${small ? smallHeight : normalHeight}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;

      background-color: ${enabledBackgroundColor};
      border: ${
        small ? smallWidth : defaultWidth
      }px solid ${enabledBackgroundColor};
      border-radius: ${radius}px;
      color: ${enabledTextColor};

      font-size: ${size}px;
      font-weight: ${weight};

      &:not([disabled]):hover, &:not([disabled]):focus {
        box-shadow: 0 4px 8px ${hexToRgb(enabledBackgroundColor, 0.45)};
      }

      &:active {
        background-color: ${pressedBackgroundColor};
        border-color: ${pressedBackgroundColor};
        color: ${pressedTextColor};
      }

      &:disabled {
        background-color ${disabledBackgroundColor};
        border-color: ${disabledBackgroundColor};
        color: ${disabledTextColor};

        cursor: not-allowed;
      }

      ${
        inverted
          ? `
        background-color: ${enabledTextColor};
        border-color: ${enabledTextColor};
        color: ${enabledBackgroundColor};

        &:active {
          background-color: ${enabledTextColor};
          border-color: ${enabledTextColor};
          color: ${pressedBackgroundColor};
        }

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: 0 4px 8px ${hexToRgb(enabledTextColor, 0.45)};
        }
      `
          : ''
      }
    `}
`;

/** Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them. */
const Button = ({
  children,
  onClick,
  full,
  disabled,
  inverted,
  small,
  ...props
}) => (
  <StyledButton
    disabled={disabled}
    full={full}
    inverted={inverted}
    onClick={onClick}
    small={small}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: node,
  disabled: bool,
  full: bool,
  inverted: bool,
  onClick: func,
  small: bool,
};

Button.defaultProps = {
  children: 'Button',
  disabled: false,
  full: false,
  inverted: false,
  onClick: () => {},
  small: false,
};

export default Button;
