import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { oneOf } from 'prop-types';

const Plan = styled(Card)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
      },
    },
  }) => `
  background-color: ${color[3]};

  ${variant ? 'color: white;' : ''}
`}
`;

Plan.propTypes = {
  variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
};

Plan.defaultProps = {
  variant: '',
};

const PlanCard = ({ ...rest }) => <Plan {...rest} />;

PlanCard.displayName = 'PlanCard';

export default PlanCard;
