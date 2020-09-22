import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';

const PLAN_LINE_HEIGHT = 8;

const Plan = styled.article`
  width: 100%;
  display: inline-block;
  position: relative;
  max-width: 288px;

  overflow: hidden;

  ${props => {
    const {
      colors,
      components: {
        card: { plan, elevation },
      },
    } = theme(props);

    return css`
      padding: ${plan.padding.top + PLAN_LINE_HEIGHT}px ${plan.padding.right}px
        ${plan.padding.bottom}px ${plan.padding.left}px;

      border-radius: ${plan.radius}px;

      background-color: ${colors.white};

      box-shadow: ${elevation};
    `;
  }}
`;

const Border = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  width: 100%;

  height: ${PLAN_LINE_HEIGHT}px;
  background-color: ${({ variant }) =>
    theme.components.card.plan.colors[variant] ||
    theme.components.card.plan.colors.deep};
`;

const PlanCard = ({ children, variant, ...rest }) => (
  <Plan {...rest}>
    <Border variant={variant} />
    {children}
  </Plan>
);

PlanCard.propTypes = {
  children: node,
  /** change the border top color */
  variant: oneOf([
    'vibin',
    'hope',
    'verve',
    'light',
    'energy',
    'medium',
    'stamina',
    'relax',
    'deep',
  ]),
};

PlanCard.defaultProps = {
  children: undefined,
  variant: undefined,
};

PlanCard.displayName = 'PlanCard';

export default PlanCard;
