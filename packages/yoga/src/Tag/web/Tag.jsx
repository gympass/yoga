import React from 'react';
import styled from 'styled-components';
import { oneOf, node, bool } from 'prop-types';
import { margins, maxWidth } from '@gympass/yoga-system';
import Text from '../../Text';

export const StyledTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-style: solid;

  ${({
    variant,
    small,
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
    ${
      small
        ? `
            padding:
              ${tag.padding.small.top}
              ${tag.padding.small.right}px
              ${tag.padding.small.bottom}
              ${tag.padding.small.left}px;
          `
        : `
            padding:
              ${tag.padding.default.top}px
              ${tag.padding.default.right}px
              ${tag.padding.default.bottom}px
              ${tag.padding.default.left}px;
          `
    }

    color: ${color.dark};
    border-radius: ${tag.border.radius}px;
    border-width: ${tag.border.width}px;
    border-color: ${borderColor.dark};
  `}

  ${margins}
  ${maxWidth}
`;

export const StyledText = styled(Text.Overline)`
  ${({
    theme: {
      yoga: {
        colors: { text },
      },
    },
  }) => `
    color: ${text.primary};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const Tag = ({
  children,
  variant = '',
  small = false,
  ellipsis = false,
  ...rest
}) => (
  <StyledTag variant={variant} small={small} {...rest}>
    <StyledText numberOfLines={ellipsis ? 1 : undefined}>{children}</StyledText>
  </StyledTag>
);

Tag.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
  /** Can send small to use this variant */
  small: bool,
  /** After set a max-width can put ellipses for large texts */
  ellipsis: bool,
};

export default Tag;
