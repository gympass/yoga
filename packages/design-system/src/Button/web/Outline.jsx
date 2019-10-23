import styled from 'styled-components';
import { hexToRgb } from '@gympass/common';

import Button from './Button';

const ButtonOutline = styled(Button)`
  ${({
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
                hover: hoverBackgroundColor,
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
    color: ${enabledTextColor};

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${hoverBackgroundColor};
      box-shadow: none;
    }

    &:not([disabled]):active {
      background-color: ${pressedBackgroundColor};
      border-color: ${pressedTextColor};
      color: ${pressedTextColor};
    }

    &:disabled {
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledTextColor};
      color: ${disabledTextColor};
    }

    ${
      inverted
        ? `
        border-color: ${white};
        color: ${white};

        &:not([disabled]):hover, &:not([disabled]):focus {
          background-color: rgba(${hexToRgb(white)}, 0.3);
        }

        &:not([disabled]):active {
          border-color: ${gray[2]};
          color: ${gray[2]};
        }
    `
        : ''
    }
  `}
`;

export default ButtonOutline;
