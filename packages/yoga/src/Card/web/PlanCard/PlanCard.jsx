import React from 'react';
import styled, { css } from 'styled-components';
import { node, string, oneOf } from 'prop-types';

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

const Ribbon = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      top: ${plan.ribbon.position.top}px;
      left: ${plan.ribbon.position.left}px;

      padding-left: ${plan.ribbon.padding.left}px;
      padding-right: ${plan.ribbon.padding.right}px;

      border: ${plan.ribbon.border.width}px solid ${plan.ribbon.border.color};
      border-radius: ${plan.ribbon.radius}px;

      font-size: ${plan.ribbon.font.size}px;
      line-height: ${plan.ribbon.font.lineHeight}px;
      font-weight: ${plan.ribbon.font.weight};
    `;
  }}
`;

const PlanCard = ({ children, ribbon, variant, ...rest }) => (
  <Plan {...rest}>
    <Border variant={variant} />
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {children}
  </Plan>
);

PlanCard.propTypes = {
  children: node,
  /** A text to be displayed in a badge on top of card */
  ribbon: string,
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
  ribbon: undefined,
  variant: undefined,
};

PlanCard.displayName = 'PlanCard';

export default PlanCard;
