import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, oneOfType, bool, node } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import { TriangleAlert } from '@gympass/yoga-icons';

import { Text } from '../..';

const StyledTag = styled.View`
  ${({
    color,
    full,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    width: ${full ? '100%' : 'auto'};
    padding:
      ${tag.padding.top}px
      ${tag.padding.right}px
      ${tag.padding.bottom}px
      ${tag.padding.left}px;

    background-color: ${hexToRgb(color, 0.25)};
    border-radius: ${tag.border.radius}px;
  `}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Text.Bold)`
  ${({
    color,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    color: ${color};

    font-size: ${tag.font.size}px;
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({
  icon: Icon,
  children,
  variant,
  theme: {
    yoga: {
      components: { tag },
      colors: { text, [variant]: color = text.secondary },
    },
  },
  ...props
}) => (
  <StyledTag color={color} {...props}>
    <Wrapper>
      {Icon && (
        <Icon
          width={14}
          height={12}
          fill={color}
          style={{ marginRight: tag.icon.margin.right + 1 }}
        />
      )}

      <StyledText color={color}>{children}</StyledText>
    </Wrapper>
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
  icon: TriangleAlert,
  full: false,
  variant: '',
};

export default withTheme(Tag);
