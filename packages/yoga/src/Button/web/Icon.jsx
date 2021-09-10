import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import StyledButton from './StyledButton';

const Icon = styled(StyledButton)`
  ${({
    full,
    secondary,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      height: unset;
      padding: 0;
      background-color: unset;
      border: none;
      border-radius: 0;
      color: ${button.types.icon.font[state].color};

      &:disabled,
      &:not([disabled]):hover,
      &:not([disabled]):focus,
      &:not([disabled]):active {
        box-shadow: unset;
        background-color: unset;
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

      ${full ? 'width: 100%' : ''}
    `;
  }}
`;

const ButtonIcon = props => <Icon {...props} />;

ButtonIcon.propTypes = {
  disabled: bool,
  secondary: bool,
};

ButtonIcon.defaultProps = {
  disabled: false,
  secondary: false,
};

ButtonIcon.displayName = 'Button.Icon';

export default ButtonIcon;
