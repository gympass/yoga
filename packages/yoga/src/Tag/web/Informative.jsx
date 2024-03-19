import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, bool } from 'prop-types';

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
    color: ${text.primary};
    border-radius: ${tag.border.radius}px;
    border-color: ${color.light};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon,
  variant,
  theme: {
    yoga: {
      colors: { text },
      components: { tag },
    },
  },
  small,
  ellipsis,
  ...rest
}) => (
  <Informative variant={variant} small={small} {...rest}>
    {icon && (
      <Icon
        as={icon}
        size={small ? tag.icon.size.small : tag.icon.size.default}
        fill={text.primary}
        marginRight={tag.icon.margin.right}
      />
    )}
    <StyledText numberOfLines={ellipsis ? 1 : undefined}>{children}</StyledText>
  </Informative>
);

TagInformative.propTypes = {
  /** Values: neutral, success, informative, attention */
  variant: oneOf(['neutral', 'success', 'informative', 'attention']),
  /** Icon reference from our library */
  icon: func,
  /** The tag's content */
  children: node.isRequired,
  /** The tag's size */
  small: bool,
  /** After set a max-width can put ellipses for large texts */
  ellipsis: bool,
};

TagInformative.defaultProps = {
  icon: undefined,
  small: false,
  variant: 'neutral',
  ellipsis: false,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
