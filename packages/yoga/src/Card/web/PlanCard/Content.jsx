import React from 'react';
import styled from 'styled-components';
import Content from '../Card/Content';

const Title = styled.h3`
  ${({
    theme: {
      yoga: {
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
`}
`;

const Price = styled.strong`
  display: block;

  ${({
    theme: {
      yoga: {
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
const Period = styled.span`
  display: block;

  ${({
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
      },
    },
  }) => `
  display: block;
  margin-bottom: ${plan.period.margin.bottom}px;

  font-size: ${plan.period.font.size}px;
  font-weight: ${plan.period.font.weight};
  `}
`;

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
