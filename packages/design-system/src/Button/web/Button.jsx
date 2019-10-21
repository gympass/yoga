import React from 'react';
import { node, func, bool } from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${({
    full,
    small,
    inverted,
    theme: {
      components: {
        button: {
          padding: { left: paddingLeft, right: paddingRight },
          height: { small: smallHeight, normal: normalHeight },
          font: { size, weight },
          hover: { shadow },
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
  }) => `
      background-color: ${enabledBackgroundColor};
      border: ${
        small ? smallWidth : defaultWidth
      }px solid ${enabledBackgroundColor};
      border-radius: ${radius}px;
      box-sizing: border-box;
      color: ${enabledTextColor};
      cursor: pointer;
      font-size: ${size}px;
      font-weight: ${weight};
      height: ${small ? smallHeight : normalHeight}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
      outline: none;
      transition: all 0.2s;
      width: ${full ? '100%' : 'auto'};

      &:not([disabled]):hover, &:not([disabled]):focus {
        box-shadow: ${shadow};
      }

      &:active {
        background-color: ${pressedBackgroundColor};
        color: ${pressedTextColor};
        border-color: ${pressedBackgroundColor};
      }

      &:disabled {
        background-color ${disabledBackgroundColor};
        color: ${disabledTextColor};
        cursor: not-allowed;
        border-color: ${disabledBackgroundColor};
      }

      ${
        inverted
          ? `
        background-color: ${enabledTextColor};
        color: ${enabledBackgroundColor};
        border-color: ${enabledTextColor};

        &:active {
          background-color: ${enabledTextColor};
          border-color: ${enabledTextColor};
          color: ${pressedBackgroundColor};
        }
      `
          : ''
      }
    `}
`;

const Button = ({
  children,
  onClick,
  full,
  disabled,
  small,
  outline,
  text,
  theme,
  ...props
}) => (
  <StyledButton
    onClick={onClick}
    full={full}
    disabled={disabled}
    small={small}
    outline={outline}
    text={text}
    theme={theme}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: node,
  onClick: func,
  full: bool,
  disabled: bool,
  small: bool,
  outline: bool,
  text: bool,
};

Button.defaultProps = {
  children: 'Gympass',
  onClick: () => {},
  full: false,
  disabled: false,
  small: false,
  outline: false,
  text: false,
};

export default Button;
