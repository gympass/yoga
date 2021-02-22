import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOfType, bool, node } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import { TriangleAlert } from '@gympass/yoga-icons';

import { StyledTag, StyledText } from './Tag';

const Informative = styled(StyledTag)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color },
        components: { tag },
      },
    },
  }) => `
    background-color: ${hexToRgb(color)};
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
      spacing,
      colors: { primary, color = primary },
    },
  },
  ...props
}) => (
  <Informative {...props}>
    <Wrapper>
      {Icon && (
        <Icon
          width={spacing.small}
          height={spacing.small}
          fill={color}
          marginRight={spacing.xxxsmall}
        />
      )}
      <StyledTextInformative>{children}</StyledTextInformative>
    </Wrapper>
  </Informative>
);

TagInformative.propTypes = {
  icon: oneOfType([bool, func]),
  children: node.isRequired,
};

TagInformative.defaultProps = {
  icon: TriangleAlert,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
