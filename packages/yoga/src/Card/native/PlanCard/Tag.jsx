import React from 'react';
import styled, { css } from 'styled-components';
import { node } from 'prop-types';

import { PLAN_LINE_HEIGHT } from './PlanCard';
import Tag from '../../../Tag';
import theme from '../../../Theme/helpers/themeReader';

const StyledTag = styled(Tag.Informative)`
  position: absolute;
  align-items: center;
  justify-content: center;

  ${(props) => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

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
