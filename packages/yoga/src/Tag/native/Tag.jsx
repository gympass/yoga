import React, { forwardRef } from 'react';
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
  <Text.Medium {...rest} />
))`
  ${({
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          feedback: { [variant]: color = { dark: text.secondary } },
        },
        components: { tag },
      },
    },
  }) => `
    color: ${color.dark};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = forwardRef(({ children, variant, small, ...props }, ref) => (
  <StyledTag ref={ref} variant={variant} small={small} {...props}>
    <StyledText variant={variant}>{children}</StyledText>
  </StyledTag>
));

Tag.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  /** Can send small to use this variant */
  small: bool,
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
  small: false,
};

export default Tag;
