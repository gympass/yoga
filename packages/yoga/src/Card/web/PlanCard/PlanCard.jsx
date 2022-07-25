import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types';

export const PLAN_LINE_HEIGHT = 8;

const Plan = styled.article`
  width: 100%;
  display: inline-block;
  position: relative;
  max-width: 312px;

  overflow: hidden;

  ${props => {
    const theme = props.theme.yoga;
    const { plan } = theme.components.card;

    return css`
      padding: ${plan.padding.top}px ${plan.padding.right}px
        ${plan.padding.bottom}px ${plan.padding.left}px;
      border: ${theme.borders.small}px solid ${theme.colors.light};
      border-radius: ${plan.radius}px;

      background-color: ${theme.colors.white};
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
