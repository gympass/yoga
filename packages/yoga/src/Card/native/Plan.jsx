import React from 'react';
import { node, bool, shape, string } from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const CardPlan = styled(Card)`
  ${({
    selected,
    theme: {
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
  `}
`;

const CardPlanHeader = styled(CardHeader)`
  ${({
    theme: {
      components: {
        card: {
          plan: { header },
        },
      },
    },
  }) => `
    margin-bottom: ${header.margin.bottom}px;
  `}
`;

const CardPlanFooter = styled(CardFooter)`
  ${({
    theme: {
      components: {
        card: {
          plan: { footer },
        },
      },
    },
  }) => `
    margin-top: ${footer.margin.top}px;
  `}
`;

const Title = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            header: {
              title: {
                font: { size, color },
              },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    ${selected ? `color: ${color.selected}` : `color: ${color.default}`}
  `}
`;

const Price = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            price: {
              font: { size, weight, color },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight}; 
    ${selected ? `color: ${color.selected}` : `color: ${color.default}`}
  `}
`;

const Period = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            period: {
              font: { size, padding, color },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    padding-top: ${padding.top}px;
    ${selected ? `color: ${color.selected}` : `color: ${color.default}`}
  `}
`;

const GymsQuantity = styled.Text`
  ${({
    selected,
    theme: {
      components: {
        card: {
          plan: {
            footer: {
              gymsQuantity: {
                font: { size, weight, color },
              },
            },
          },
        },
      },
    },
  }) => `
    font-size: ${size}px;
    font-weight: ${weight};
    ${selected ? `color: ${color.selected}` : `color: ${color.default}`}
  `}
`;

const Plans = ({ plan, selected, ribbon, ...rest }) => {
  return (
    <CardPlan selected={selected} {...rest}>
      <CardPlanHeader ribbon={ribbon}>
        <Title selected={selected}>{plan.name}</Title>
      </CardPlanHeader>
      <Price selected={selected}>{plan.price}</Price>
      <Period selected={selected}>/{plan.period}</Period>
      <CardPlanFooter>
        <GymsQuantity selected={selected}>{plan.gyms} gyms</GymsQuantity>
      </CardPlanFooter>
    </CardPlan>
  );
};

Plans.propTypes = {
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

Plans.defaultProps = {
  selected: false,
  ribbon: null,
  children: 'Card',
};

export default Plans;
