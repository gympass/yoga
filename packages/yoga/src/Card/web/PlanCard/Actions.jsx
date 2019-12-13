import styled from 'styled-components';
import Actions from '../Card/Actions';

const PlanActions = styled(Actions)`
  display: grid;
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    grid-gap: ${spacing.xsmall}px;
    padding-top: ${spacing.xsmall}px;
  `}
`;

PlanActions.displayName = 'PlanCard.Actions';

export default PlanActions;
