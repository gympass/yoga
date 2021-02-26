import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, node } from 'prop-types';
import Text from '../../Text';

export const StyledTag = styled.View`
  justify-content: center;
  align-items: center;

  ${({
    variant,
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
    padding:
      ${tag.padding.top}px
      ${tag.padding.right}px
      ${tag.padding.bottom}px
      ${tag.padding.left}px;

    border-radius: ${tag.border.radius}px;
    border-width: ${tag.border.width}px;
    border-color: ${borderColor.dark};
  `}
`;

export const StyledText = styled(({ variant, ...rest }) => <Text {...rest} />)`
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
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  children: node.isRequired,
};

Tag.defaultProps = {
  variant: '',
};

export default withTheme(Tag);
