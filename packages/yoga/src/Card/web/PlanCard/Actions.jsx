import styled from 'styled-components';
import Actions from '../Card/Actions';

const PlanActions = styled(Actions)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    *:not(:last-child) {
      margin-bottom: ${spacing.xsmall}px;
    }
    padding-top: ${spacing.xsmall}px;
  `}
`;

PlanActions.displayName = 'PlanCard.Actions';

export default PlanActions;
