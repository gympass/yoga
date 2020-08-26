import styled from 'styled-components';
import Actions from '../Card/Actions';

const PlanActions = styled(Actions)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    *:not(:last-child) {
      margin-bottom: ${spacing.xxsmall}px;
    }
    padding-top: ${spacing.xxsmall}px;
  `}
`;

PlanActions.displayName = 'PlanCard.Actions';

export default PlanActions;
