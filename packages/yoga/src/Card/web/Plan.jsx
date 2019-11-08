import React from 'react';
import { node, bool, shape, string } from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardPlan = styled(Card)`
  ${({
    selected,
    theme: {
      colors,
      components: {
        card: { background },
      },
    },
  }) => `
    ${
      selected
        ? `background-color: ${background.selected}`
        : `background-color: ${background.default}`
    }
    h1, h2, span {
      font-family: 'Open Sans';
      margin: 0;
      ${selected && `color: ${colors.white}`}
    }
  `}
`;

const Title = styled.h1`
  ${({
    theme: {
      components: {
        card: {
          plan: {
            header: {
              title: {
                font: { size },
              },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
  `}
`;

const Price = styled.h2`
  ${({
    theme: {
      components: {
        card: {
          plan: {
            price: {
              font: { size, weight },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight};
  `}
`;

const Period = styled.span`
  ${({
    theme: {
      components: {
        card: {
          plan: {
            period: {
              font: { size, padding },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    padding-top: ${padding.top}px;
  `}
`;

const GymsQuantity = styled.span`
  ${({
    theme: {
      colors,
      components: {
        card: {
          plan: {
            footer: {
              gymsQuantity: {
                font: { size, weight },
              },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight};
    color: ${colors.secondary[3]}
  `}
`;

const Plan = ({ plan, selected, ribbon, children, ...rest }) => (
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
  children: node,
};

Plan.defaultProps = {
  selected: false,
  ribbon: null,
  children: 'Card',
};

export default Plan;
