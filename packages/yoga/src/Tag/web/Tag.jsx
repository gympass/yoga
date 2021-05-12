import React from 'react';
import styled from 'styled-components';
import { oneOf, node } from 'prop-types';
import { spacing } from '@gympass/yoga-system';

const StyledTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-style: solid;

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

  ${spacing}
`;

/** Tags should be keywords to categorize or organize an item. */
const Tag = props => <StyledTag {...props} />;

Tag.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
};

export default Tag;
