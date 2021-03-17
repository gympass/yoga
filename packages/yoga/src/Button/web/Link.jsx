import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import StyledButton from './StyledButton';

const Link = styled(StyledButton)`
  ${({
    full,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
  height: unset;
  padding: 0;
  background-color: unset;
  border: none;
  border-radius: 0;
  color: ${button.types.link.font.color};

  &:disabled,
  &:not([disabled]):hover,
  &:not([disabled]):focus,
  &:not([disabled]):active {
    box-shadow: unset;
    background-color: unset;
  }

  &:not([disabled]):hover  {
    color: ${hexToRgb(button.types.link.font.color, 0.5)};
  }

  &:not([disabled]):focus, &:not([disabled]):active {
    color: ${hexToRgb(button.types.link.font.color, 0.75)};
  }

  &:disabled {
    color: ${button.types.link.font.disabled.color};
  }

  ${full ? 'width: 100%' : ''}
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

export default ButtonLink;
