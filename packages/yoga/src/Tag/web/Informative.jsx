import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, bool } from 'prop-types';
import { margins } from '@gympass/yoga-system';

import Tag from './Tag';
import Icon from '../../Icon';

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
  `}

  ${margins}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon,
  theme: {
    yoga: {
      colors: { text },
      components: { tag },
    },
  },
  small,
  ...props
}) => (
  <Informative small={small} {...props}>
    {icon && (
      <Icon
        as={icon}
        size={small ? tag.icon.size.small : tag.icon.size.default}
        fill={text.primary}
        marginRight={tag.icon.margin.right}
      />
    )}
    {children}
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
};

TagInformative.defaultProps = {
  icon: undefined,
  small: false,
  variant: 'neutral'
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
