import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';
import Content from '../Card/Content';
import Subtitle from './Subtitle';
import Divider from '../../../Divider';

const Title = styled(Text.Medium)`
  ${props => {
    const {
      components: { card, cardweb },
    } = theme(props);

    return css`
      color: ${card.plan.title.color};
      margin-bottom: ${cardweb.plan.title.margin.bottom}px;
      line-height: ${cardweb.plan.title.lineHeight}px;
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
      components: { cardweb },
    } = theme(props);

    return css`
      margin-bottom: ${cardweb.plan.price.margin.bottom}px;
    `;
  }}
`;

const EnhancePrice = styled(Text.Medium)`
  align-self: center;
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
      {currency && <Text.H4 as="sup">{currency}</Text.H4>}
      {price && <Text.H4 as="strong">{price}</Text.H4>}
      {period && (
        <EnhancePrice as="sub">{`${suffix || ''} ${period}`}</EnhancePrice>
      )}
    </Price>
    <Divider />
    {children}
  </Content>
);

PlanCardContent.propTypes = {
  /** plan name */
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
