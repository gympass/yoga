import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node } from 'prop-types';

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
  ...props
}) => (
  <Informative {...props}>
    {Icon && (
      <Icon
        width={tag.icon.size}
        height={tag.icon.size}
        fill={text.primary}
        style={{ marginRight: tag.icon.margin.right }}
      />
    )}
    {children}
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  icon: func,
  children: node.isRequired,
};

TagInformative.defaultProps = {
  variant: 'informative',
  icon: undefined,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
