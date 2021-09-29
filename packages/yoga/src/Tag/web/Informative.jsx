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
          elements,
          feedback: {
            [variant]: color = { light: elements.backgroundAndDisabled },
          },
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
  /** style the tag following the theme (success, informative, attention) */
  variant: oneOf(['', 'success', 'informative', 'attention']),
  icon: func,
  children: node.isRequired,
  /** Can send small to use this variant */
  small: bool,
};

TagInformative.defaultProps = {
  variant: '',
  icon: undefined,
  small: false,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
