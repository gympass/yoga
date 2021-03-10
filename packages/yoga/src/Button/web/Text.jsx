import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const ButtonText = styled(Button)`
  ${({
    secondary,
    inverted,
    theme: {
      yoga: {
        colors,
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.text.backgroundColor};
    border-color: ${button.types.text.backgroundColor};
    color: ${colors[secondary ? 'secondary' : 'primary']};

    svg {
      fill: ${colors[secondary ? 'secondary' : 'primary']};
    }

    &:not([disabled]):hover, &:not([disabled]):focus, &:not([disabled]):active {
      background-color: ${button.types.text.backgroundColor};
      box-shadow: none;
    }

    &:not([disabled]):hover {
      color: ${hexToRgb(colors[secondary ? 'secondary' : 'primary'], 0.5)};
      svg {
        fill: ${hexToRgb(colors[secondary ? 'secondary' : 'primary'], 0.5)};
      }
    }

    &:not([disabled]):focus, &:not([disabled]):active {
      color: ${hexToRgb(colors[secondary ? 'secondary' : 'primary'], 0.75)};
      svg {
        fill: ${hexToRgb(colors[secondary ? 'secondary' : 'primary'], 0.75)};
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
      color: ${colors.text.disabled};
      svg {
        fill: ${colors.text.disabled};
      }
    }
  `}
`;

ButtonText.displayName = 'Button.Text';

export default ButtonText;
