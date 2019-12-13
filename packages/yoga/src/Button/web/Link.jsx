import React from 'react';
import { oneOf, bool } from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Link = styled(Button)(
  ({
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
  height: unset;
  padding: 0;
  margin-top: ${link.margin.top}px;
  margin-bottom: ${link.margin.bottom}px;
  background-color: unset;
  border: none;
  border-radius: 0;
  color: ${color[3]};

  &:not([disabled]):hover, &:not([disabled]):focus {
    box-shadow: unset;
    color: ${color[2]};
  }

  &:not([disabled]):active {
    background-color: unset;
    color: ${color[2]};
  }

  &:disabled {
    background-color: unset;
    color: ${link.textColor.disabled};
  }

  ${
    inverted
      ? `
        color: ${white};

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: unset;
          color: ${gray[2]};
        }
      `
      : ''
  }
`,
);

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

export default ButtonLink;
