import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, string } from 'prop-types';

import Tag from './Tag';

const Informative = styled(Tag)`
  justify-content: center;
  align-items: center;

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

    font-size: ${tag.font.size}px;
    font-weight: ${tag.font.weight};

    svg {
      margin-right: ${tag.icon.margin.right}px;
    }
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon: Icon,
  theme: {
    yoga: {
      colors: { text },
      components: { tag },
    },
  },
  size,
  ...props
}) => (
  <Informative size={size} {...props}>
    {Icon && (
      <Icon
        width={size === 'small' ? tag.icon.size.small : tag.icon.size.default}
        height={size === 'small' ? tag.icon.size.small : tag.icon.size.default}
        fill={text.primary}
      />
    )}
    {children}
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']).isRequired,
  icon: func,
  children: node.isRequired,
  size: string,
};

TagInformative.defaultProps = {
  icon: undefined,
  size: undefined,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
