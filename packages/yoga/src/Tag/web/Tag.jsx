import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, bool, node } from 'prop-types';

const StyledTag = styled.div`
  justify-content: center;
  align-items: center;

  ${({
    full,
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          elements,
          feedback: {
            [variant]: color = { dark: text.secondary },
            [variant]: borderColor = { dark: elements.selectionAndIcons },
          },
        },
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

    color: ${color.dark};
    border-radius: ${tag.border.radius}px;
    border: ${tag.border.width}px solid;
    border-color: ${borderColor.dark};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({ children, ...props }) => (
  <StyledTag {...props}>{children}</StyledTag>
);

Tag.propTypes = {
  full: bool,
  /** style the card following the theme (primary, secondary, stamina, vibin,
   * peace, verve, uplift, verve, uplift, deep, medium, light, white,
   * energy, success, neutral, attention, hope, relax, clear) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  full: false,
  variant: '',
};

export default withTheme(Tag);
