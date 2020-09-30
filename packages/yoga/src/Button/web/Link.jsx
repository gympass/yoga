import React from 'react';
import { oneOf, bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import StyledButton from './StyledButton';

const Link = styled(StyledButton)`
  ${({
    inverted,
    full,
    theme: {
      yoga: {
        colors: { white, text, [variant]: color },
        components: { button },
      },
    },
  }) => `
  height: unset;
  padding: 0;
  margin-top: ${button.types.link.margin.top}px;
  margin-bottom: ${button.types.link.margin.bottom}px;
  background-color: unset;
  border: none;
  border-radius: 0;
  color: ${color};

  &:not([disabled]):hover, &:not([disabled]):focus {
    box-shadow: unset;
    color: ${hexToRgb(color, 0.75)};
  }

  &:not([disabled]):active {
    background-color: unset;
    color: ${hexToRgb(color, 0.75)};
  }

  &:disabled {
    background-color: unset;
    color: ${button.types.link.font.disabled.color};
  }

  ${
    inverted
      ? `
        color: ${white};

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: unset;
          color: ${text.secondary};
        }
      `
      : ''
  }

  ${full ? 'width: 100%' : ''}
`}
`;

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  /** style the card following the theme (primary, secondary, vibin, hope,
   * energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
   * medium, light, clear, white) */
  variant: oneOf([
    'primary',
    'secondary',
    'vibin',
    'hope',
    'energy',
    'relax',
    'peace',
    'verve',
    'uplift',
    'deepPurple',
    'stamina',
    'dark',
    'medium',
    'deep',
    'light',
    'clear',
    'white',
  ]),
  inverted: bool,
  disabled: bool,
};

ButtonLink.defaultProps = {
  variant: 'primary',
  inverted: false,
  disabled: false,
};

ButtonLink.displayName = 'Button.Link';

export default ButtonLink;
