import React, { forwardRef } from 'react';
import { oneOfType, func, node, bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const IconStyled = styled(Button)`
  ${({
    large,
    inverted,
    secondary,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      width: ${
        large ? button.types.icon.size.large : button.types.icon.size.default
      }px;
      height: ${
        large ? button.types.icon.size.large : button.types.icon.size.default
      }px;
      padding: 4px;
      border-radius: 50%;

      svg {
        margin: 0;
        width: ${
          large ? button.types.icon.svg.large : button.types.icon.svg.default
        }px;
        height: ${
          large ? button.types.icon.svg.large : button.types.icon.svg.default
        }px;
        fill: ${button.types.contained.font.default.color};
 
        transition: fill 0.2s;
      }

      &:disabled,
      &:not([disabled]):hover,
      &:not([disabled]):focus,
      &:not([disabled]):active {
        box-shadow: unset;
      }

      &:not([disabled]):hover  {
        color: ${hexToRgb(button.types.link.font[state].color, 0.5)};
      }

      &:not([disabled]):focus, &:not([disabled]):active {
        color: ${hexToRgb(button.types.link.font[state].color, 0.75)};
      }

      &:disabled {
        color: ${button.types.link.font.disabled.color};
      }

      ${
        inverted
          ? `
              background-color: ${button.types.contained.font.default.color};
              color: ${button.types.contained.backgroundColor[state].default};
      
              svg {
                fill: ${button.types.contained.backgroundColor[state].default};
              }
      
              &:active {
                background-color: ${hexToRgb(
                  button.types.contained.font.default.color,
                  0.75,
                )};
                color: ${button.types.contained.backgroundColor[state].pressed};
      
                svg {
                  fill: ${
                    button.types.contained.backgroundColor[state].pressed
                  };
                }
              }
      
              &:not([disabled]):hover, &:not([disabled]):focus {
                box-shadow: 0 4px 8px ${hexToRgb(
                  button.types.contained.font.default.color,
                  0.45,
                )};
              }
            `
          : ''
      }
    `;
  }}
`;

const ButtonIcon = forwardRef(({ icon: Icon, ...props }, ref) => (
  <IconStyled ref={ref} {...props}>
    {Icon && <Icon />}
  </IconStyled>
));

ButtonIcon.propTypes = {
  large: bool,
  icon: oneOfType([node, func]),
};

ButtonIcon.defaultProps = {
  large: undefined,
  icon: undefined,
};

ButtonIcon.displayName = 'Button.Icon';

export default ButtonIcon;
