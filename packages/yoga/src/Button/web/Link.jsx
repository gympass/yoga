import React from 'react';
import { bool, string } from 'prop-types';

import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import Button from './Button';

const Link = styled(Button)`
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
      color: ${button.types.link.font[state].color};

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

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  disabled: bool,
  secondary: bool,
  href: string,
};

ButtonLink.defaultProps = {
  disabled: false,
  secondary: false,
  href: undefined,
};

ButtonLink.displayName = 'Button.Link';

export default ButtonLink;
