import React, { forwardRef } from 'react';
import { bool, string, oneOfType, node, func } from 'prop-types';

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
      text-decoration: underline;
      text-decoration-color: ${button.types.link.font[state].color};

      svg {
        margin-right: ${button.types.link.icon.margin.right}px;
        fill: ${button.types.link.font[state].color};
      }

      &:not([disabled]):link {
        text-decoration: underline;
      }

      &:disabled,
      &:not([disabled]):hover,
      &:not([disabled]):focus,
      &:not([disabled]):active {
        box-shadow: unset;
        background-color: unset;
      }

      &:not([disabled]):hover  {
        color: ${hexToRgb(button.types.link.font[state].color, 0.5)};

        text-decoration-color: ${hexToRgb(
          button.types.link.font[state].color,
          0.5,
        )};

        svg {
          fill: ${hexToRgb(button.types.link.font[state].color, 0.5)};
        }
      }

      &:not([disabled]):focus, &:not([disabled]):active {
        color: ${hexToRgb(button.types.link.font[state].color, 0.75)};

        text-decoration-color: ${hexToRgb(
          button.types.link.font[state].color,
          0.75,
        )};

        svg {
          fill: ${hexToRgb(button.types.link.font[state].color, 0.75)};
        }
      }

      &:disabled {
        color: ${button.types.link.font.disabled.color};

        text-decoration: underline;
        text-decoration-color: ${button.types.link.font.disabled.color};

        svg {
          fill: ${button.types.link.font.disabled.color};
        }
      }

      ${full ? 'width: 100%' : ''}
    `;
  }}
`;

const ButtonLink = forwardRef(({ secondary = false, ...rest }, ref) => {
  const props = Object.fromEntries(
    Object.entries(rest).filter(([key]) => key !== 'isLoading'),
  );

  const { disabled } = props;

  return (
    <Link
      {...props}
      secondary={secondary}
      disabled={disabled}
      aria-disabled={disabled}
      ref={ref}
    />
  );
});

ButtonLink.propTypes = {
  disabled: bool,
  secondary: bool,
  href: string,
  /** an Icon from yoga-icons package */
  icon: oneOfType([node, func]),
};

ButtonLink.displayName = 'Button.Link';

export default ButtonLink;
