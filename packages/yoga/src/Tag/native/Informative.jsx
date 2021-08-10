import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, string } from 'prop-types';

import { StyledTag, StyledText } from './Tag';

const Informative = styled(StyledTag)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          feedback: { [variant]: color = { light: text.secondary } },
        },
        components: { tag },
      },
    },
  }) => `
    background-color: ${color.light};
    border-color: ${color.light};
    border-radius: ${tag.border.radius}px;
  `}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledTextInformative = styled(StyledText)`
  ${({
    theme: {
      yoga: {
        colors: { text },
        components: { tag },
      },
    },
  }) => `
    color: ${text.primary};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon: Icon,
  theme: {
    yoga: {
      colors: {
        text: { primary },
      },
      components: { tag },
    },
  },
  size,
  ...props
}) => (
  <Informative size={size} {...props}>
    <Wrapper>
      {Icon && (
        <Icon
          width={size === 'small' ? tag.icon.size.small : tag.icon.size.default}
          height={
            size === 'small' ? tag.icon.size.small : tag.icon.size.default
          }
          fill={primary}
          style={{ marginRight: tag.icon.margin.right }}
        />
      )}
      <StyledTextInformative>{children}</StyledTextInformative>
    </Wrapper>
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']).isRequired,
  icon: func,
  children: node.isRequired,
  /** Can send small to use this variant */
  size: string,
};

TagInformative.defaultProps = {
  icon: undefined,
  size: undefined,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
