import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import withTouchable from './withTouchable';
import { Label } from './Button';

const Link = styled(Label)`
  ${({
    disabled,
    pressed,
    theme: {
      yoga: {
        components: {
          button: {
            types: { link },
          },
        },
      },
    },
  }) => `
    color: ${link.font.color};

    ${disabled ? `color: ${link.font.disabled.color};` : ''}
    ${!disabled && pressed ? `color: ${hexToRgb(link.font.color, 0.75)};` : ''}
  `}
`;

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  disabled: bool,
};

ButtonLink.defaultProps = {
  disabled: false,
};

ButtonLink.displayName = 'Button.Link';

export default withTouchable(ButtonLink);
