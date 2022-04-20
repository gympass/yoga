import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';

import Card from '../Card';

export const PLAN_LINE_HEIGHT = 8;

const Plan = styled(Card)`
  max-width: 288px;
  width: 100%;
  position: relative;

  ${(props) => {
    const {
      colors,
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      padding: ${plan.padding.top}px ${plan.padding.right}px
        ${plan.padding.bottom}px ${plan.padding.left}px;

      border-radius: ${plan.radius}px;

      background-color: ${colors.white};
    `;
  }}
`;

const Border = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 8px;
  background-color: ${({
    variant,
    theme: {
      yoga: {
        colors: { deepPurple, [variant]: color = deepPurple },
      },
    },
  }) => color};
`;

const PlanCard = ({ children, variant, ...rest }) => (
  <Plan {...rest}>
    <Border variant={variant} />
    {children}
  </Plan>
);

PlanCard.propTypes = {
  children: node,
  /** style the card border top color following the theme (primary, secondary,
   * vibin, hope, energy, relax, peace, verve, uplift, deepPurple, deep,
   * stamina, dark, medium, light, clear, white) */
  variant: oneOf([
    'primary',
    'secondary',
    'vibin',
    'hope',
    'energy',
    'relax',
    'peace',
    'verve',
    'uplift',
    'deepPurple',
    'stamina',
    'dark',
    'medium',
    'deep',
    'light',
    'clear',
    'white',
  ]),
};

PlanCard.defaultProps = {
  children: undefined,
  variant: 'deepPurple',
};

PlanCard.displayName = 'PlanCard';

export default PlanCard;
