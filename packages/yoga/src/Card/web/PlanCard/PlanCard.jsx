import React from 'react';
import styled, { css } from 'styled-components';
import { node, string } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';

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
      padding: ${plan.padding.top}px ${plan.padding.right}px
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

  height: 8px;
  background-color: #d7d7e0;
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

const PlanCard = ({ children, ribbon, ...rest }) => (
  <Plan {...rest}>
    <Border />
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {children}
  </Plan>
);

PlanCard.propTypes = {
  children: node,
  /** A text to be displayed in a badge on top of card */
  ribbon: string,
};

PlanCard.defaultProps = {
  children: undefined,
  ribbon: undefined,
};

PlanCard.displayName = 'PlanCard';

export default PlanCard;
