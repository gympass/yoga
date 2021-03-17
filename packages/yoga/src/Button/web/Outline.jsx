import React from 'react';
import styled from 'styled-components';
import { bool, func, node, oneOfType } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const Outline = styled(Button)`
  ${({
    inverted,
    theme: {
      yoga: {
        colors: { white },
        components: {
          button: {
            types: { outline },
          },
        },
      },
    },
  }) => `
    background-color: ${outline.backgroundColor.default};
    border: ${outline.border.width}px solid;
    border-color: ${outline.font.default.color};
    color: ${outline.font.default.color};

    svg {
      fill: ${outline.font.default.color};
    }

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${outline.backgroundColor.hover};
      color: ${outline.font.hover.color};

      svg {
        fill: ${outline.font.hover.color};
      }
    }

    &:not([disabled]):active {
      background-color: ${outline.backgroundColor.default};
      border-color: ${outline.font.pressed.color};
      color: ${outline.font.pressed.color};
      box-shadow: none;

      svg {
        fill: ${outline.font.pressed.color};
      }
    }

    &:disabled {
      background-color: ${outline.backgroundColor.default};
      border-color: ${outline.font.disabled.color};
      color: ${outline.font.disabled.color};

      svg {
        fill: ${outline.font.disabled.color};
      }
    }

    ${
      inverted
        ? `
          border-color: ${white};
          color: ${white};

          svg {
            fill: ${white};
          }

          &:not([disabled]):hover, &:not([disabled]):focus {
            background-color: ${white};
            color: ${outline.font.default.color};

            svg {
              fill: ${outline.font.default.color};
            }
          }

          &:not([disabled]):active {
            background-color: ${outline.backgroundColor.default};
            border-color: ${hexToRgb(white, 0.75)};
            color: ${hexToRgb(white, 0.75)};

            svg {
              fill: ${hexToRgb(white, 0.75)};
            }
          }

          &:disabled {
            border-color: ${outline.font.disabled.color};
            color: ${outline.font.disabled.color};
            svg {
              fill: ${outline.font.disabled.color};
            }
          }
        `
        : ''
    }
  `}
`;

const ButtonOutline = props => <Outline {...props} />;

ButtonOutline.propTypes = {
  inverted: bool,
  small: bool,
  /** an Icon from yoga-icons package */
  icon: oneOfType([node, func]),
};

ButtonOutline.defaultProps = {
  inverted: false,
  small: false,
  icon: undefined,
};

ButtonOutline.displayName = 'Button.Outline';

export default ButtonOutline;
