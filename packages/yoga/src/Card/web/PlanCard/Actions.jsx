import styled from 'styled-components';

import Actions from '../Card/Actions';
import Button from '../../../Button';
import theme from '../../../Theme/helpers/themeReader';

const {
  components: { card, cardweb },
} = theme;

const PlanCardButton = styled(Button).attrs({
  full: true,
})``;

const PlanCardButtonText = styled(Button.Text).attrs({
  full: true,
})`
  margin-top: ${cardweb.plan.actions.buttonText.margin.top}px;
  margin-bottom: ${card.plan.actions.buttonText.margin.bottom}px;
`;

const PlanCardActions = styled(Actions)`
  margin-top: ${theme.components.cardweb.plan.actions.margin.top}px;
`;

PlanCardActions.displayName = 'PlanCard.Actions';
PlanCardButton.displayName = 'PlanCard.Button';
PlanCardButtonText.displayName = 'PlanCard.ButtonText';

export {
  PlanCardActions as Actions,
  PlanCardButton as Button,
  PlanCardButtonText as ButtonText,
};
