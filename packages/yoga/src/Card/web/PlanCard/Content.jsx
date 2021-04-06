import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';
import Content from '../Card/Content';
import Subtitle from './Subtitle';

const Title = styled(Text.H5)`
  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      color: ${plan.title.color};
      margin-bottom: ${plan.title.margin.bottom}px;
    `;
  }}
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

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-top: ${plan.price.margin.top}px;
      margin-bottom: ${plan.price.margin.bottom}px;
    `;
  }}
`;

const EnhancePrice = styled(Text.Small)`
  ${({ align }) => `
    align-self: ${align};
  `}
`;

const Currency = styled(EnhancePrice)`
  margin-right: ${theme.components.card.plan.price.currency.margin.right}px;
`;

const PlanCardContent = ({
  title,
  subtitle,
  description,
  currency,
  suffix,
  price,
  period,
  children,
  ...rest
}) => (
  <Content {...rest}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
    <Price>
      {currency && (
        <Currency as="sup" align="flex-start">
          {currency}
        </Currency>
      )}
      {price && <Text.H1 as="strong">{price}</Text.H1>}
      {period && (
        <EnhancePrice as="sub" align="flex-end">
          {`${suffix || ''} ${period}`}
        </EnhancePrice>
      )}
    </Price>
    {children}
  </Content>
);

PlanCardContent.propTypes = {
  /** Plan name */
  title: string.isRequired,
  /** currency of the current country */
  currency: string,
  /** suffix currency of the current country */
  suffix: string,
  price: string.isRequired,
  /** period that this price will be charged  */
  period: string.isRequired,
  description: string,
  subtitle: string,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
  description: null,
  subtitle: null,
  currency: null,
  suffix: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
