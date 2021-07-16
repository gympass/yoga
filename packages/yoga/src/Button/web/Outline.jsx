import React from 'react';
import styled from 'styled-components';
import { bool, func, node, oneOfType } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const Outline = styled(Button)`
  ${({
    inverted,
    secondary,
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
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      background-color: ${outline.backgroundColor.default};
      border: ${outline.border.width}px solid;
      border-color: ${outline.font.default[state].color};
      color: ${outline.font.default[state].color};

      svg {
        fill: ${outline.font.default[state].color};
      }

      &:not([disabled]):hover, &:not([disabled]):focus {
        background-color: ${outline.backgroundColor[state].hover};
        color: ${outline.font.hover.color};

        svg {
          fill: ${outline.font.hover.color};
        }
      }

      &:not([disabled]):active {
        background-color: ${outline.backgroundColor.default};
        border-color: ${outline.font.pressed[state].color};
        color: ${outline.font.pressed[state].color};
        box-shadow: none;

        svg {
          fill: ${outline.font.pressed[state].color};
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
              color: ${outline.font.default[state].color};

              svg {
                fill: ${outline.font.default[state].color};
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
    `;
  }}
`;

const ButtonOutline = props => <Outline {...props} />;

ButtonOutline.propTypes = {
  disabled: bool,
  full: bool,
  inverted: bool,
  onClick: func,
  secondary: bool,
  small: bool,
  /** an Icon from yoga-icons package */
  icon: oneOfType([node, func]),
};

ButtonOutline.defaultProps = {
  disabled: false,
  full: false,
  inverted: false,
  onClick: () => {},
  secondary: false,
  small: false,
  icon: undefined,
};

ButtonOutline.displayName = 'Button.Outline';

export default ButtonOutline;
