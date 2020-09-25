import styled from 'styled-components';

import Actions from '../Card/Actions';
import theme from '../../../Theme/helpers/themeReader';

const Action = styled(Actions)`
  margin-top: ${theme.components.card.plan.actions.margin.top}px;
`;

Action.displayName = 'PlanCard.Actions';

export default Action;
