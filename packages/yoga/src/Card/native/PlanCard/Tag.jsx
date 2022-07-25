import React from 'react';
import styled, { css } from 'styled-components';
import { node } from 'prop-types';

import { PLAN_LINE_HEIGHT } from './PlanCard';
import Tag from '../../../Tag';

const StyledTag = styled(Tag.Informative).attrs(() => ({ small: true }))`
  position: absolute;
  align-items: center;
  justify-content: center;

  ${props => {
    const { plan } = props.theme.yoga.components.card;

    return css`
      top: ${plan.tag.position.top + PLAN_LINE_HEIGHT}px;
      left: ${plan.tag.position.left}px;
    `;
  }}
`;

const PlanCardTag = ({ children, ...rest }) => (
  <StyledTag {...rest}>{children}</StyledTag>
);

PlanCardTag.displayName = 'PlanCard.Tag';

PlanCardTag.propTypes = {
  children: node.isRequired,
};

export default PlanCardTag;
