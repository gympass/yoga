import React from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType } from 'prop-types';

import Button from '../../../Button';
import { typeOf } from '../../../shared/propTypes';
import Actions from '../Card/Actions';

const Action = styled(Actions)`
  display: flex;
  ${({
    lastChild,
    theme: {
      yoga: { spacing },
    },
  }) => `
    ${!lastChild ? `margin-bottom: ${spacing.xsmall}px;` : ''}
  `}
`;

const ActionWrapper = styled.View`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    padding-top: ${spacing.xsmall}px;
  `}
`;

const PlanActions = ({ children }) => {
  const actionsLength = React.Children.count(children);
  return (
    <ActionWrapper>
      {React.Children.map(children, (child, index) => (
        <Action lastChild={actionsLength === index + 1}>{child}</Action>
      ))}
    </ActionWrapper>
  );
};

PlanActions.propTypes = {
  children: oneOfType([
    oneOfType([
      typeOf(Button),
      typeOf(Button.Text),
      typeOf(Button.Outline),
      typeOf(Button.Link),
    ]),
    arrayOf(
      oneOfType([
        typeOf(Button),
        typeOf(Button.Text),
        typeOf(Button.Outline),
        typeOf(Button.Link),
      ]),
    ),
  ]),
};

PlanActions.defaultProps = {
  children: null,
};

PlanActions.displayName = 'PlanCard.Actions';

export default PlanActions;
