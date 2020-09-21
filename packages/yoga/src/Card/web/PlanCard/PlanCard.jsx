import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';

const Plan = styled.article`
  width: 100%;
  display: inline-block;
  position: relative;
  max-width: 288px;

  padding: ${theme.components.card.plan.padding.top}px
    ${theme.components.card.plan.padding.right}px
    ${theme.components.card.plan.padding.bottom}px
    ${theme.components.card.plan.padding.left}px;

  border-radius: ${theme.components.card.plan.radius}px;

  background-color: ${theme.colors.white};

  box-shadow: ${theme.components.card.elevation};
  overflow: hidden;
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

const PlanCard = ({ children, ...rest }) => (
  <Plan {...rest}>
    <Border />
    {children}
  </Plan>
);

PlanCard.propTypes = {
  children: node,
};

PlanCard.defaultProps = {
  children: undefined,
};
PlanCard.displayName = 'PlanCard';

export default PlanCard;
