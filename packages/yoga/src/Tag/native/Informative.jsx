import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, bool } from 'prop-types';
import { margins } from '@gympass/yoga-system';

import { StyledTag, StyledText } from './Tag';
import Icon from '../../Icon';

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

  ${margins}
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
      },
    },
  }) => `
    color: ${text.primary};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon = undefined,
  ellipsis = false,
  theme: {
    yoga: {
      colors: { text },
      components: { tag },
    },
  },
  small = false,
  variant = 'neutral',
  ...rest
}) => (
  <Informative variant={variant} small={small} {...rest}>
    <Wrapper>
      {icon && (
        <Icon
          as={icon}
          size={small ? tag.icon.size.small : tag.icon.size.default}
          fill={text.primary}
          marginRight={tag.icon.margin.right}
        />
      )}
      <StyledTextInformative numberOfLines={ellipsis ? 1 : undefined}>
        {children}
      </StyledTextInformative>
    </Wrapper>
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (neutral, success, informative, attention) */
  variant: oneOf(['neutral', 'success', 'informative', 'attention']),
  icon: func,
  children: node.isRequired,
  /** Can send small to use this variant */
  small: bool,
  ellipsis: bool,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
