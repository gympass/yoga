import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, bool, node } from 'prop-types';
import Text from '../../Text';

export const StyledTag = styled.View`
  justify-content: center;
  align-items: center;

  ${({
    full,
    variant,
    theme: {
      yoga: {
        colors: { text, [variant]: color = text.secondary },
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

    color: ${color};
    border-radius: ${tag.border.radius}px;
    border: ${tag.border.width}px solid;
    border-color: ${color};
  `}
`;

export const StyledText = styled(Text)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { text, [variant]: color = text.secondary },
        components: { tag },
      },
    },
  }) => `
    color: ${color};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({ children, ...props }) => (
  <StyledTag {...props}>
    <StyledText {...props}>{children}</StyledText>
  </StyledTag>
);

Tag.propTypes = {
  full: bool,
  /** style the card following the theme (primary, secondary, stamina, vibin,
   * peace, verve, uplift, verve, uplift, deep, medium, light, white,
   * energy, success, neutral, attention, hope, relax, clear) */
  variant: oneOf([
    '',
    'primary',
    'secondary',
    'stamina',
    'vibin',
    'peace',
    'verve',
    'uplift',
    'deep',
    'medium',
    'light',
    'white',
    'energy',
    'success',
    'neutral',
    'attention',
    'hope',
    'relax',
    'clear',
  ]),
  children: node.isRequired,
};

Tag.defaultProps = {
  full: false,
  variant: '',
};

export default withTheme(Tag);
