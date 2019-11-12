import React from 'react';
import { bool, shape, string } from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardPlanWrapper = styled(Card)(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    ${selected ? `background-color: ${card.plan.background.selected};` : ''}
`,
);

const Title = styled.h2(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    margin: 0;
    font-size: ${card.plan.title.font.size}px;
    color: ${
      selected
        ? `${card.plan.title.font.selected.color}`
        : `${card.plan.title.font.color}`
    };
`,
);

const Price = styled.h3(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    margin: 0;
    font-size: ${card.plan.price.font.size}px;
    font-weight: ${card.plan.price.font.weight};
    color: ${
      selected
        ? `${card.plan.price.font.selected.color}`
        : `${card.plan.price.font.color}`
    };
`,
);

const Period = styled.span(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    margin: 0;
    font-size: ${card.plan.period.font.size}px;
    padding-top: ${card.plan.period.font.padding.top}px;
    color: ${
      selected
        ? `${card.plan.period.font.selected.color}`
        : `${card.plan.period.font.color}`
    };
`,
);

const GymsQuantity = styled.span(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    margin: 0;
    font-size: ${card.plan.gymsQuantity.font.size}px;
    font-weight: ${card.plan.gymsQuantity.font.weight};
    color: ${
      selected
        ? `${card.plan.gymsQuantity.font.selected.color}`
        : `${card.plan.gymsQuantity.font.color}`
    };
`,
);

const CardPlan = ({ plan, selected, ribbon, ...rest }) => (
  <CardPlanWrapper selected={selected} {...rest}>
    <Card.Header ribbon={ribbon} style={{ marginBottom: 40 }}>
      <Title selected={selected}>{plan.name}</Title>
    </Card.Header>
    <Price selected={selected}>{plan.price}</Price>
    <Period selected={selected}>/{plan.period}</Period>
    <Card.Footer style={{ marginTop: 20 }}>
      <GymsQuantity selected={selected}>{plan.gyms} gyms</GymsQuantity>
    </Card.Footer>
  </CardPlanWrapper>
);

CardPlan.displayName = 'Card.Plan';

CardPlan.propTypes = {
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

CardPlan.defaultProps = {
  selected: false,
  ribbon: null,
};

export default CardPlan;
