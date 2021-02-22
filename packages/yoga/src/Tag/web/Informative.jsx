import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOfType, bool, node } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import { CheckedFull } from '@gympass/yoga-icons';

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
          feedback: {
            [variant]: { light = text.secondary },
          },
        },
        components: { tag },
      },
    },
  }) => `
    background-color: ${hexToRgb(light)};
    color: ${text.primary};
    border-radius: ${tag.border.radius}px;
    border-color: ${light};

    font-size: ${tag.font.size}px;
    font-weight: ${tag.font.weight};

    svg {
      margin-right: ${tag.icon.margin.right}px;
    }
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
    {Icon && (
      <Icon
        width={tag.icon.size}
        height={tag.icon.size}
        fill={color}
        marginRight={tag.icon.margin.right}
      />
    )}
    {children}
  </Informative>
);

TagInformative.propTypes = {
  icon: oneOfType([bool, func]),
  children: node.isRequired,
};

TagInformative.defaultProps = {
  icon: CheckedFull,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
