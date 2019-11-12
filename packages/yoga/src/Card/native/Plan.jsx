import React from 'react';
import { bool, shape, string, func } from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Card from './Card';

const CardPlanWrapper = styled(Card)(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
  ${selected && `background-color: ${card.plan.background.selected};`}
`,
);

const Title = styled.Text(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
  font-size: ${card.plan.title.font.size}px;
  color: ${
    selected
      ? `${card.plan.title.font.selected.color}`
      : `${card.plan.title.font.color}`
  };
`,
);

const Price = styled.Text(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
  font-size: ${card.plan.price.font.size}px;
  font-weight: ${card.plan.price.font.weight}; 
  color: ${
    selected
      ? `${card.plan.price.font.selected.color}`
      : `${card.plan.price.font.color}`
  };
`,
);

const Period = styled.Text(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
  font-size: ${card.plan.period.font.size}px;
  padding-top: ${card.plan.period.font.padding.top}px;
  color: ${
    selected
      ? `${card.plan.period.font.selected.color}`
      : `${card.plan.period.font.color}`
  };
`,
);

const GymsQuantity = styled.Text(
  ({
    selected,
    theme: {
      components: { card },
    },
  }) => `
    font-size: ${card.plan.gymsQuantity.font.size}px;
    font-weight: ${card.plan.gymsQuantity.font.weight};
    color: ${
      selected
        ? `${card.plan.gymsQuantity.font.selected.color}`
        : `${card.plan.gymsQuantity.font.color}`
    };
`,
);

const CardPlan = ({ plan, selected, ribbon, ...rest }) => {
  return (
    <CardPlanWrapper selected={selected} {...rest}>
      <TouchableOpacity testID="touchable" {...rest}>
        <Card.Header ribbon={ribbon} style={{ marginBottom: 40 }}>
          <Title selected={selected}>{plan.name}</Title>
        </Card.Header>
        <Price selected={selected}>{plan.price}</Price>
        <Period selected={selected}>/{plan.period}</Period>
        <Card.Footer style={{ marginTop: 20 }}>
          <GymsQuantity selected={selected}>{plan.gyms} gyms</GymsQuantity>
        </Card.Footer>
      </TouchableOpacity>
    </CardPlanWrapper>
  );
};

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
  onPress: func,
};

CardPlan.defaultProps = {
  selected: false,
  ribbon: null,
  onPress: () => {},
};

export default CardPlan;
