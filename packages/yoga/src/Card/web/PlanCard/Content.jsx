import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';
import Content from '../Card/Content';
import Subtitle from './Subtitle';
import Divider from '../../../Divider';

const Wrapper = styled(Content)`
  flex: 1;
`;

const Title = styled(Text.Medium)`
  ${props => {
    const {
      components: { card, cardweb },
      colors,
      radii,
    } = theme(props);
    const { badgeColor } = props;
    const badgeStyle =
      badgeColor &&
      css`
        ::before {
          position: absolute;
          left: 0;
          content: '';
          height: 24px;
          width: 4px;
          background-color: ${colors[props.badgeColor]};
          border-top-right-radius: ${radii.xsmall}px;
          border-bottom-right-radius: ${radii.xsmall}px;
        }
      `;

    return css`
      color: ${card.plan.title.color};
      margin-bottom: ${cardweb.plan.title.margin.bottom}px;
      line-height: ${cardweb.plan.title.lineHeight}px;
      ${badgeStyle}
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
  badgeColor,
  subtitle,
  description,
  currency,
  suffix,
  price,
  period,
  extra,
  children,
  ...rest
}) => (
  <Wrapper {...rest}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {title && <Title badgeColor={badgeColor}>{title}</Title>}
    {description && <Description>{description}</Description>}
    {!!price && (
      <Price>
        {currency && <Text.H4 as="sup">{currency}</Text.H4>}
        {price && <Text.H4 as="strong">{price}</Text.H4>}
        {suffix && <Text.H4 as="sup">{suffix}</Text.H4>}
        {period && <EnhancePrice as="sub">{period}</EnhancePrice>}
      </Price>
    )}
    {extra}
    <Divider />
    {children}
  </Wrapper>
);

PlanCardContent.propTypes = {
  /** plan name */
  title: string.isRequired,
  /** currency of the current country */
  currency: string,
  /** suffix currency of the current country */
  suffix: string,
  price: string,
  /** period that this price will be charged  */
  period: string,
  description: string,
  subtitle: string,
  extra: node,
  children: node,
  /** color of the badge attached to the title  */
  badgeColor: string,
};

PlanCardContent.defaultProps = {
  children: null,
  description: null,
  subtitle: null,
  currency: null,
  suffix: null,
  price: null,
  period: null,
  extra: null,
  badgeColor: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
