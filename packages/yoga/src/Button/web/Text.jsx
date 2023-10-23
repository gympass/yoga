import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { bool } from 'prop-types';

import Button from './Button';

const StyledButton = styled(Button)`
  ${({
    secondary,
    inverted,
    theme: {
      yoga: {
        colors,
        components: { button },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      background-color: ${button.types.text.backgroundColor};
      border-color: ${button.types.text.backgroundColor};
      color: ${colors[state]};

      svg {
        fill: ${colors[state]};
      }

      &:not([disabled]):hover, &:not([disabled]):focus, &:not([disabled]):active {
        background-color: ${button.types.text.backgroundColor};
        box-shadow: none;
      }

      &:not([disabled]):hover {
        color: ${hexToRgb(colors[state], 0.5)};
        svg {
          fill: ${hexToRgb(colors[state], 0.5)};
        }
      }

      &:not([disabled]):focus, &:not([disabled]):active {
        color: ${hexToRgb(colors[state], 0.75)};
        svg {
          fill: ${hexToRgb(colors[state], 0.75)};
        }
      }

      ${
        inverted
          ? `
          color: ${colors.white};
          svg {
            fill: ${colors.white};
          }

          &:not([disabled]):hover {
            color: ${hexToRgb(colors.white, 0.5)};
            svg {
              fill: ${hexToRgb(colors.white, 0.5)};
            }
          }

          &:not([disabled]):focus, &:not([disabled]):active {
            color: ${hexToRgb(colors.white, 0.75)};
            svg {
              fill: ${hexToRgb(colors.white, 0.75)};
            }
          }
        `
          : ''
      }

      &:disabled {
        background-color: ${button.types.text.backgroundColor};
        border-color: ${button.types.text.backgroundColor};
        color: ${button.types.text.disabled};
        svg {
          fill: ${button.types.text.disabled};
        }
      }
    `;
  }}
`;

// eslint-disable-next-line react/prop-types
const ButtonText = forwardRef(({ isLoading, ...rest }, ref) => {
  const { secondary, inverted } = rest;

  return (
    <StyledButton
      {...rest}
      secondary={secondary}
      inverted={inverted}
      ref={ref}
    />
  );
});

ButtonText.propTypes = {
  inverted: bool,
  secondary: bool,
};

ButtonText.defaultProps = {
  inverted: false,
  secondary: false,
};

ButtonText.displayName = 'Button.Text';

export default ButtonText;
