import React from 'react';
import styled from 'styled-components';
import { oneOf, node, bool } from 'prop-types';
import { margins } from '@gympass/yoga-system';
import Text from '../../Text';

export const StyledTag = styled.View`
  justify-content: center;
  align-items: center;

  ${({
    variant,
    small,
    theme: {
      yoga: {
        colors: {
          elements,
          feedback: {
            [variant]: borderColor = { dark: elements.selectionAndIcons },
          },
        },
        components: { tag },
      },
    },
  }) => `
    width: auto;
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

    border-radius: ${tag.border.radius}px;
    border-width: ${tag.border.width}px;
    border-color: ${borderColor.dark};
  `}

  ${margins}
`;

export const StyledText = styled(({ variant, ...rest }) => (
  <Text.Overline {...rest} />
))`
  ${({
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          feedback: { [variant]: color = { dark: text.secondary } },
        },
      },
    },
  }) => `
    color: ${color.dark};
  `}
`;

/** Use Tag component when you want to categorize your content */
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
  /** Can send small to use this variant */
  small: bool,
  children: node.isRequired,
  ellipsis: bool,
};

export default Tag;
