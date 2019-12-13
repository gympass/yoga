import React from 'react';
import styled from 'styled-components';
import Content from '../Card/Content';

const Title = styled.h3`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
        components: {
          card: { plan },
        },
      },
    },
  }) => `
  display: -webkit-box;
  height: 40px;
  margin: ${plan.title.margin.top}px 0 ${plan.title.margin.bottom}px;

  font-size: ${plan.title.font.size}px;
  font-weight: ${plan.title.font.weight};

  color: inherit;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: -o-ellipsis-lastline;
  -webkit-box-orient: vertical; 
`}
`;

const Price = styled.strong`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
        components: {
          card: { plan },
        },
      },
    },
  }) => `
  margin-top: ${plan.price.margin.top}px;

  font-size: ${plan.price.font.size}px;
  font-weight: ${plan.price.font.weight};
  `}
`;
const Period = styled.span``;

const PlanCardContent = ({ title, price, period }) => {
  return (
    <Content>
      {title && <Title>{title}</Title>}
      {price && <Price>{price}</Price>}
      {period && <Period>{period}</Period>}
    </Content>
  );
};

export default PlanCardContent;
