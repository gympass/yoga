import React from 'react';
import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const Outline = styled(Button)`
  ${({
    inverted,
    variant,
    theme: {
      yoga: {
        colors: { white, [variant]: color },
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.outline.backgroundColor.default};
    border-color: ${color};
    color: ${color};

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${hexToRgb(color, 0.25)};
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

const ButtonOutline = props => <Outline {...props} />;

ButtonOutline.propTypes = {
  /** style the link following the theme (primary, secondary) */
  variant: oneOf(['primary', 'secondary']),
  inverted: bool,
};

ButtonOutline.defaultProps = {
  variant: 'primary',
  inverted: false,
};

ButtonOutline.displayName = 'Button.Outline';

export default ButtonOutline;
