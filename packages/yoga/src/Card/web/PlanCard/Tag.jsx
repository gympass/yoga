import styled, { css } from 'styled-components';

import { PLAN_LINE_HEIGHT } from './PlanCard';
import Tag from '../../../Tag';

const StyledTag = styled(Tag.Informative).attrs(() => ({ small: true }))`
  position: absolute;
  display: inline-flex;
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

StyledTag.displayName = 'PlanCard.Tag';

export default StyledTag;
