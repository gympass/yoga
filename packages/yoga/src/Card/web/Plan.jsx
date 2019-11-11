import React from 'react';
import { bool, shape, string, func } from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardPlan = styled(Card)`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: { background, color },
        },
      },
    },
  }) => `
    ${selected ? `background-color: ${background.selected};` : ''}
    h1, h2, span {
      margin: 0;
      ${selected ? `color: ${color.selected};` : ''}
    }
  `}
`;

const Title = styled.h1`
  ${({
    theme: {
      components: {
        card: {
          plan: { title },
        },
      },
    },
  }) => `
    font-size: ${title.font.size}px;
    color: ${title.font.color};
  `}
`;

const Price = styled.h2`
  ${({
    theme: {
      components: {
        card: {
          plan: { price },
        },
      },
    },
  }) => `
    font-size: ${price.font.size}px;
    font-weight: ${price.font.weight};
    color: ${price.font.color};
  `}
`;

const Period = styled.span`
  ${({
    theme: {
      components: {
        card: {
          plan: { period },
        },
      },
    },
  }) => `
    font-size: ${period.font.size}px;
    padding-top: ${period.font.padding.top}px;
    color: ${period.font.color};
  `}
`;

const GymsQuantity = styled.span`
  ${({
    theme: {
      components: {
        card: {
          plan: { gymsQuantity },
        },
      },
    },
  }) => `
    font-size: ${gymsQuantity.font.size}px;
    font-weight: ${gymsQuantity.font.weight};
    color: ${gymsQuantity.font.color};
  `}
`;

const Plan = ({ plan, selected, ribbon, ...rest }) => (
  <CardPlan selected={selected} {...rest}>
    <Card.Header ribbon={ribbon} style={{ marginBottom: 40 }}>
      <Title>{plan.name}</Title>
    </Card.Header>
    <Price>{plan.price}</Price>
    <Period>/{plan.period}</Period>
    <Card.Footer style={{ marginTop: 20 }}>
      <GymsQuantity>{plan.gyms} gyms</GymsQuantity>
    </Card.Footer>
  </CardPlan>
);

Plan.propTypes = {
  selected: bool,
  plan: shape({
    name: string,
    price: string,
    period: string,
    gyms: string,
  }).isRequired,
  ribbon: shape({
    label: string,
    secondary: bool,
  }),
};

Plan.defaultProps = {
  selected: false,
  ribbon: null,
};

export default Plan;
