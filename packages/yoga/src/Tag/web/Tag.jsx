import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, oneOfType, bool, node } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import { AlertTriangle } from '@gympass/yoga-icons';

const StyledTag = styled.div`
  justify-content: center;
  align-items: center;

  ${({
    color,
    full,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    display: ${full ? 'flex' : 'inline-flex'};

    padding:
      ${tag.padding.top}px
      ${tag.padding.right}px
      ${tag.padding.bottom}px
      ${tag.padding.left}px;

    background-color: ${hexToRgb(color, 0.25)};
    color: ${color};
    border-radius: ${tag.border.radius}px;

    font-size: ${tag.font.size}px;
    font-weight: ${tag.font.weight};

    svg {
      margin-right: ${tag.icon.margin.right + 1}px;
    }
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({
  icon: Icon,
  children,
  variant,
  theme: {
    yoga: {
      colors: { text, [variant]: color = text.secondary },
    },
  },
  ...props
}) => (
  <StyledTag color={color} {...props}>
    {Icon && <Icon width={16} height={16} fill={color} />}
    {children}
  </StyledTag>
);

Tag.propTypes = {
  icon: oneOfType([bool, func]),
  full: bool,
  /** style the card following the theme (primary, secondary, vibin, hope,
   * energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
   * medium, light, clear, white) */
  variant: oneOf([
    '',
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
  children: node.isRequired,
};

Tag.defaultProps = {
  icon: AlertTriangle,
  full: false,
  variant: '',
};

export default withTheme(Tag);
