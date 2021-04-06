import styled from 'styled-components';

import Actions from '../Card/Actions';
import Button from '../../../Button';
import theme from '../../../Theme/helpers/themeReader';

const {
  components: {
    card: {
      plan: { actions },
    },
  },
} = theme;

const PlanCardButton = styled(Button).attrs({
  small: true,
  full: true,
})``;

const PlanCardButtonText = styled(Button.Text).attrs({
  small: true,
  full: true,
})`
  margin-top: ${actions.buttonText.margin.top}px;
  margin-bottom: ${actions.buttonText.margin.bottom}px;
`;

const PlanCardActions = styled(Actions)`
  margin-top: ${theme.components.card.plan.actions.margin.top}px;
`;

PlanCardActions.displayName = 'PlanCard.Actions';
PlanCardButton.displayName = 'PlanCard.Button';
PlanCardButtonText.displayName = 'PlanCard.ButtonText';

export {
  PlanCardActions as Actions,
  PlanCardButton as Button,
  PlanCardButtonText as ButtonText,
};
