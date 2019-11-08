import React from 'react';
import { bool, shape, string } from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardPlan = styled(Card)`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: { background },
        },
      },
    },
  }) => `
    ${selected && `background-color: ${background.selected}`}
  `}
`;

const Title = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            color,
            title: { font },
          },
        },
      },
    },
  }) => `
    font-size: ${font.size}px;
    ${selected ? `color: ${color.selected}` : `color: ${font.color}`}
  `}
`;

const Price = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            color,
            price: { font },
          },
        },
      },
    },
  }) => `
    font-size: ${font.size}px;
    font-weight: ${font.weight}; 
    ${selected ? `color: ${color.selected}` : `color: ${font.color}`}
  `}
`;

const Period = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            color,
            period: { font },
          },
        },
      },
    },
  }) => `
    font-size: ${font.size}px;
    padding-top: ${font.padding.top}px;
    ${selected ? `color: ${color.selected};` : `color: ${font.color};`}
  `}
`;

const GymsQuantity = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            color,
            gymsQuantity: { font },
          },
        },
      },
    },
  }) => `
    font-size: ${font.size}px;
    font-weight: ${font.weight};
    ${selected ? `color: ${color.selected}` : `color: ${font.color}`}
  `}
`;

const Plan = ({ plan, selected, ribbon, ...rest }) => {
  return (
    <CardPlan selected={selected} {...rest}>
      <Card.Header ribbon={ribbon} style={{ marginBottom: 40 }}>
        <Title selected={selected}>{plan.name}</Title>
      </Card.Header>
      <Price selected={selected}>{plan.price}</Price>
      <Period selected={selected}>/{plan.period}</Period>
      <Card.Footer style={{ marginTop: 20 }}>
        <GymsQuantity selected={selected}>{plan.gyms} gyms</GymsQuantity>
      </Card.Footer>
    </CardPlan>
  );
};

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
