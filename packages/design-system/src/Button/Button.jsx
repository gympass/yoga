import React from 'react';
import { node, func, bool } from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${({
    full,
    small,
    disabled,
    outline,
    text,
    theme: {
      components: {
        button: {
          padding: { left: paddingLeft, right: paddingRight },
          height: { small: smallHeight, normal: normalHeight },
          font: { size, weight },
          hover: { shadow },
          border: { width: borderWidth, radius },
          types,
        },
      },
    },
  }) => {
    const currentType = outline ? 'outline' : text ? 'text' : 'contained';
    const { backgroundColor, textColor } = types[currentType];
    const hasHover = currentType === 'outline' || 'text';
    const hasBoxShadow = currentType === 'contained' && !disabled;

    return `
      background-color: ${backgroundColor.enabled};
      border: ${borderWidth}px solid ${
      outline ? textColor.enabled : backgroundColor.enabled
    };
      border-radius: ${radius}px;
      box-sizing: border-box;
      color: ${textColor.enabled};
      font-size: ${size}px;
      font-weight: ${weight};
      height: ${small ? smallHeight : normalHeight}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
      outline: none;
      transition: all 0.2s;
      width: ${full ? '100%' : 'auto'};

      &:hover, &:focus {
        box-shadow: ${hasBoxShadow ? shadow : 'none'};
        ${hasHover ? `background-color: ${backgroundColor.hover};` : ''}
      }

      &:active {
        background-color: ${backgroundColor.pressed};
        color: ${textColor.pressed};
        border-color: ${outline ? textColor.pressed : backgroundColor.pressed};
      }

      &:disabled {
        background-color ${backgroundColor.disabled};
        color: ${textColor.disabled};
        cursor: not-allowed;
        border-color: ${
          outline ? textColor.disabled : backgroundColor.disabled
        };
      }
    `;
  }}
`;

/** This is a Buttton description */
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
