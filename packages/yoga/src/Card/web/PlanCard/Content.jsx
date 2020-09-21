import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';
import Content from '../Card/Content';
import Subtitle from './Subtitle';

const Title = styled(Text.H5)`
  color: ${theme.components.card.plan.title.color};
  margin-bottom: ${theme.components.card.plan.title.margin.bottom}px;
`;

const Description = styled(Text.Small)`
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${theme.components.card.plan.description.color};

  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: -o-ellipsis-lastline;
`;

const Price = styled.div`
  display: flex;
  margin-top: ${theme.components.card.plan.price.margin.top}px;
  margin-bottom: ${theme.components.card.plan.price.margin.bottom}px;
`;

const EnhancePrice = styled(Text.Small)`
  ${({ align }) => `
    align-self: ${align};
  `}
`;

const PlanCardContent = ({
  title,
  subtitle,
  description,
  currency,
  price,
  period,
  children,
  ...rest
}) => (
  <Content {...rest}>
    {subtitle && <Subtitle>plan</Subtitle>}
    {title && <Title>{title}</Title>}
    <Description>{description}</Description>
    <Price>
      {price && (
        <EnhancePrice as="sup" align="flex-start">
          {currency}
        </EnhancePrice>
      )}
      {price && <Text.H1 as="strong">{price}</Text.H1>}
      {period && (
        <EnhancePrice as="sub" align="flex-end">
          {period}
        </EnhancePrice>
      )}
    </Price>
    {children}
  </Content>
);

PlanCardContent.propTypes = {
  title: string.isRequired,
  currency: string.isRequired,
  price: string.isRequired,
  period: string.isRequired,
  description: string,
  subtitle: string,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
  description: null,
  subtitle: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
