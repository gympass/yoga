import React from 'react';
import styled, { css } from 'styled-components';
import { string, shape, node } from 'prop-types';

import Content from '../Card/Content';
import Text from '../../../Text';
import theme from '../../../Theme/helpers/themeReader';

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

  color: ${theme.components.card.plan.description.color};
`;

const Price = styled.View`
  flex-direction: row;

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

const EnhancePrice = styled.View`
  ${({ align }) => `
    align-self: ${align};
  `}
`;

const Currency = styled(EnhancePrice)`
  margin-right: ${theme.components.card.plan.price.currency.margin.right}px;
`;

const PlanCardContent = ({
  title,
  description,
  currency,
  price,
  period,
  children,
  ...rest
}) => (
  <Content {...rest}>
    {title && <Title>{title}</Title>}
    {description && <Description numberOfLines={2}>{description}</Description>}
    <Price>
      {currency.prefix && (
        <Currency align="flex-start">
          <Text.Small>{currency.prefix}</Text.Small>
        </Currency>
      )}
      {price && <Text.H3>{price}</Text.H3>}
      {period && (
        <EnhancePrice align="flex-end">
          <Text.Small>{`${currency.suffix || ''}${period}`}</Text.Small>
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
  currency: shape({
    prefix: string,
    suffix: string,
  }).isRequired,
  price: string.isRequired,
  /** period that this price will be charged  */
  period: string.isRequired,
  description: string,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
  description: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
