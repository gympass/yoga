import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node } from 'prop-types';

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
  ...props
}) => (
  <Informative {...props}>
    <Wrapper>
      {Icon && (
        <Icon
          width={tag.icon.size}
          height={tag.icon.size}
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
};

TagInformative.defaultProps = {
  icon: undefined,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
