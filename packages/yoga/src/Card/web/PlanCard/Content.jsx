import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import Content from '../Card/Content';
import Text from '../../../Text';

const Title = styled(Text.Small)`
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

  color: inherit;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: -o-ellipsis-lastline;
`}
`;

const Price = styled(Text.H3)`
  display: block;
  color: inherit;

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
  `}
`;
const Period = styled(Text.Small)`
  display: block;
  color: inherit;

  ${({
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
      },
    },
  }) => `
  margin-bottom: ${plan.period.margin.bottom}px;
  `}
`;

const PlanCardContent = ({ title, price, period, children, ...rest }) => (
  <Content {...rest}>
    {title && <Title as="h3">{title}</Title>}
    {price && <Price as="strong">{price}</Price>}
    {period && <Period as="span">{period}</Period>}
    {children}
  </Content>
);

PlanCardContent.propTypes = {
  title: string.isRequired,
  price: string.isRequired,
  period: string.isRequired,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
