import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOfType, oneOf, bool, node } from 'prop-types';

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
        colors: { text, color = text.primary },
        components: { tag },
      },
    },
  }) => `
    color: ${color};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

const TagInformative = ({
  children,
  icon: Icon,
  theme: {
    yoga: {
      colors: { primary, color = primary },
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
          fill={color}
          marginRight={tag.icon.margin.right}
        />
      )}
      <StyledTextInformative>{children}</StyledTextInformative>
    </Wrapper>
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  icon: oneOfType([bool, func]),
  children: node.isRequired,
};

TagInformative.defaultProps = {
  variant: 'informative',
  icon: false,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
