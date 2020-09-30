import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const ButtonOutline = styled(Button)`
  ${({
    inverted,
    theme: {
      yoga: {
        colors: { white },
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.outline.backgroundColor.default};
    border-color: ${button.types.outline.font.default.color};
    color: ${button.types.outline.font.default.color};

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${button.types.outline.backgroundColor.hover};
      box-shadow: none;
    }

    &:not([disabled]):active {
      background-color: ${button.types.outline.backgroundColor.pressed};
      border-color: ${button.types.outline.font.pressed.color};
      color: ${button.types.outline.font.pressed.color};
    }

    &:disabled {
      background-color: ${button.types.outline.backgroundColor.disabled};
      border-color: ${button.types.outline.font.disabled.color};
      color: ${button.types.outline.font.disabled.color};
    }

    ${
      inverted
        ? `
        border-color: ${white};
        color: ${white};

        &:not([disabled]):hover, &:not([disabled]):focus {
          background-color: ${hexToRgb(white, 0.25)};
        }

        &:not([disabled]):active {
          border-color: ${hexToRgb(white, 0.75)};
          color: ${hexToRgb(white, 0.75)};
        }
    `
        : ''
    }
  `}
`;

export default ButtonOutline;
