import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import withTouchable from './withTouchable';
import { Label } from './Button';

const Link = styled(Label)`
  ${({
    disabled,
    pressed,
    secondary,
    theme: {
      yoga: {
        components: {
          button: {
            types: { link },
          },
        },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      color: ${link.font[state].color};
      text-decoration: underline;
      text-decoration-color: ${link.font[state].color};

      ${
        disabled
          ? `color: ${link.font.disabled.color};
            text-decoration-color: ${link.font.disabled.color};`
          : ''
      }
      ${
        !disabled && pressed
          ? `color: ${hexToRgb(link.font[state].color, 0.75)};
            text-decoration-color: ${hexToRgb(link.font[state].color, 0.75)};`
          : ''
      }
    `;
  }}
`;

// const ButtonLink = forwardRef((props, ref) => <Link {...props} ref={ref} />);

const ButtonLink = forwardRef(
  ({ disabled = false, secondary = false, ...props }, ref) => (
    <Link disabled={disabled} secondary={secondary} {...props} ref={ref} />
  ),
);

ButtonLink.propTypes = {
  disabled: bool,
  secondary: bool,
};

ButtonLink.displayName = 'Button.Link';

export default withTouchable(ButtonLink);
