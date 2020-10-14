import React from 'react';
import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import withTouchable from './withTouchable';
import { Label } from './Button';

const Link = styled(Label)`
  ${({
    disabled,
    pressed,
    inverted,
    variant,
    theme: {
      yoga: {
        colors: { white, text, [variant]: color },
        components: {
          button: {
            types: { link },
          },
        },
      },
    },
  }) => `
    margin-top: ${link.margin.top}px;
    margin-bottom: ${link.margin.bottom}px;
    color: ${color};

    ${disabled ? `color: ${link.font.disabled.color};` : ''}
    ${!disabled && pressed ? `color: ${hexToRgb(color, 0.75)};` : ''}

    ${
      inverted && !disabled
        ? `
        color: ${white};
        ${!disabled && pressed ? `color: ${text.secondary};` : ''}
      `
        : ''
    }

    ${inverted && pressed ? `color: ${text.secondary};` : ''}
  `}
`;

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  /** style the link following the theme (primary, secondary) */
  variant: oneOf(['primary', 'secondary']),
  inverted: bool,
  disabled: bool,
};

ButtonLink.defaultProps = {
  variant: 'primary',
  inverted: false,
  disabled: false,
};

ButtonLink.displayName = 'Button.Link';

export default withTouchable(ButtonLink);
