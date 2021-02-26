import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, node } from 'prop-types';

const StyledTag = styled.div`
  justify-content: center;
  align-items: center;

  ${({
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
    display: inline-flex;

    padding:
      ${tag.padding.top}px
      ${tag.padding.right}px
      ${tag.padding.bottom}px
      ${tag.padding.left}px;

    color: ${color.dark};
    border-radius: ${tag.border.radius}px;
    border-width: ${tag.border.width}px;
    border-color: ${borderColor.dark};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const Tag = ({ children, ...props }) => (
  <StyledTag {...props}>{children}</StyledTag>
);

Tag.propTypes = {
  /** style the card following the theme (success, neutral, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
};

export default withTheme(Tag);
