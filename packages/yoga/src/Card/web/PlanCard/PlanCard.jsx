import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { oneOf } from 'prop-types';

const Plan = styled(Card)`
  max-width: 280px;
  width: 100%;
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = {}, white },
      },
    },
  }) => `
  ${
    variant
      ? `
      color: ${white};
      background-color: ${color[3]};
    `
      : ''
  }
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
