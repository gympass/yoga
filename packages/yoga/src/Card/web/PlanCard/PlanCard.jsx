import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';

import Card from '../Card';

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

const PlanCard = ({ ...rest }) => <Plan {...rest} />;

PlanCard.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the ribbon following the theme (primary, secondary, tertiary) */
  ribbon: shape({
    text: string,
    variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
  }),
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
};

PlanCard.defaultProps = {
  ribbon: {},
  variant: '',
};
PlanCard.displayName = 'PlanCard';

export default PlanCard;
