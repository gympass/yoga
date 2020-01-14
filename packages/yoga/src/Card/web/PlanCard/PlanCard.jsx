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
        colors: { white },
      },
    },
  }) => `
  ${variant ? `color: ${white};` : ''}
`}
`;

const PlanCard = ({ ...rest }) => <Plan {...rest} />;

PlanCard.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the ribbon following the theme (primary, secondary, tertiary)
   * variantIntensity: ribbon variant color intensity (0, 1, 2, 3) */
  ribbon: shape({
    text: string,
    variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
    variantIntensity: oneOf([0, 1, 2, 3]),
  }),
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
  /** intensity of variant color (0, 1, 2, 3) */
  variantIntensity: oneOf([0, 1, 2, 3]),
};

PlanCard.defaultProps = {
  ribbon: {},
  variant: '',
  variantIntensity: 2,
};
PlanCard.displayName = 'PlanCard';

export default PlanCard;
