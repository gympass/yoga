import React from 'react';
import styled from 'styled-components';
import { oneOf, node } from 'prop-types';
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
              0
              ${tag.padding.small.right}px
              0
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
const Tag = ({ children, variant, ...props }) => (
  <StyledTag variant={variant} {...props}>
    <StyledText variant={variant}>{children}</StyledText>
  </StyledTag>
);

Tag.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
};

export default Tag;
