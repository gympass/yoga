import styled from 'styled-components';

import Actions from '../Card/Actions';
import theme from '../../../Theme/helpers/themeReader';

const PlanActions = styled(Actions)`
  margin-top: ${theme.components.card.plan.actions.margin.top}px;
`;

PlanActions.displayName = 'PlanCard.Actions';

export default PlanActions;
