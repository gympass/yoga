import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, oneOfType, bool, node } from 'prop-types';
import { TriangleAlert } from '@gympass/yoga-icons';

const StyledTag = styled.View`
  ${({
    color,
    full,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    width: ${full ? '100%' : 'auto'};
    padding: 
      ${tag.padding.top}px 
      ${tag.padding.right}px 
      ${tag.padding.bottom}px 
      ${tag.padding.left}px;

    background-color: ${color[0]};
    border-radius: ${tag.border.radius}px;
  `}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  ${({
    color,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    color: ${color[1]};

    font-size: ${tag.font.size}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Use Tag component when you want to categorize your content */
const Tag = ({
  icon: Icon,
  children,
  variant,
  theme: {
    yoga: {
      components: { tag },
      colors: {
        gray: { 1: background, 8: text },
        [variant]: color = [background, text],
      },
    },
  },
  ...props
}) => (
  <StyledTag color={color} {...props}>
    <Wrapper>
      {Icon && (
        <Icon
          width={14}
          height={12}
          fill={color[1]}
          style={{ marginRight: tag.icon.margin.right + 1 }}
        />
      )}

      <StyledText color={color}>{children}</StyledText>
    </Wrapper>
  </StyledTag>
);

Tag.propTypes = {
  icon: oneOfType([bool, func]),
  full: bool,
  /** '', positive, negative, informative, warning */
  variant: oneOf(['', 'positive', 'negative', 'informative', 'warning']),
  children: node.isRequired,
};

Tag.defaultProps = {
  icon: TriangleAlert,
  full: false,
  variant: '',
};

export default withTheme(Tag);
