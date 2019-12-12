import React from 'react';
import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';

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
        colors: { white, gray, [variant]: color },
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
    color: ${color[3]};

    ${disabled ? `color: ${link.disabled};` : ''}
    ${!disabled && pressed ? `color: ${color[2]};` : ''}

    ${
      inverted && !disabled
        ? `
        color: ${white};
        ${!disabled && pressed ? `color: ${gray[2]};` : ''}
      `
        : ''
    }

    ${inverted && pressed ? `color: ${gray[2]};` : ''}
  `}
`;

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  /** style the link following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
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
