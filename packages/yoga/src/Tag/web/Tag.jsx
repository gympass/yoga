import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, oneOfType, bool, node } from 'prop-types';
import { TriangleAlert } from '@gympass/yoga-icons';

const StyledTag = styled.div`
  justify-content: center;
  align-items: center;

  ${({
    color,
    full,
    theme: {
      yoga: {
        components: { tag },
      },
    },
  }) => `
    display: ${full ? 'flex' : 'inline-flex'};

    padding: 
      ${tag.padding.top}px 
      ${tag.padding.right}px 
      ${tag.padding.bottom}px 
      ${tag.padding.left}px;

    background-color: ${color[0]};
    color: ${color[1]};
    border-radius: ${tag.border.radius}px;

    font-size: ${tag.font.size}px;
    font-weight: ${tag.font.weight};

    svg {
      margin-right: ${tag.icon.margin.right + 1}px;
    }
  `}
`;

const Tag = ({
  icon: Icon,
  children,
  variant,
  theme: {
    yoga: {
      colors: {
        gray: { 1: background, 8: text },
        [variant]: color = [background, text],
      },
    },
  },
  ...props
}) => (
  <StyledTag color={color} {...props}>
    {Icon && <Icon width={14} height={12} fill={color[1]} />}
    {children}
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
