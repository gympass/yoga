import React from 'react';
import styled from 'styled-components';
import { string, shape, oneOf, node } from 'prop-types';

import Text from '../../../Text';

const CardShadow = styled.View(
  ({
    theme: {
      yoga: {
        components: { card },
      },
    },
  }) => `
    box-shadow: ${card.elevation};
    elevation: 4;
`,
);

const CardStyled = styled.View(
  ({
    variant,
    variantIntensity,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
        components: { card },
      },
    },
  }) => `
    padding:
      ${card.padding.top}px 
      ${card.padding.right}px 
      ${card.padding.bottom}px 
      ${card.padding.left}px;

    border-radius: ${card.radii}px;
    background-color: ${
      variant ? color[variantIntensity] : card.backgroundColor
    };
    elevation: 4;
    overflow: hidden;
`,
);

const Ribbon = styled.View`
  ${({
    variant,
    variantIntensity,
    theme: {
      yoga: {
        components: { card },
        spacing,
        colors: { gray, [variant]: color = {}, white, dark },
      },
    },
  }) => `
    align-self: flex-start;

    margin-bottom: ${card.padding.bottom}px;
    margin-left: -${card.padding.left}px;

    padding: 
      ${spacing.xxsmall}px
      ${spacing.small}px
      ${spacing.xxsmall}px
      ${spacing.medium}px;
    
    border-top-right-radius: ${card.ribbon.radius}px;
    border-bottom-right-radius: ${card.ribbon.radius}px;
    background-color: ${
      variant
        ? color[typeof variantIntensity === 'number' ? variantIntensity : 3]
        : gray[1]
    };

    color: ${variant ? white : dark};
  `}
`;

const RibbonText = styled(Text.Tiny)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { white, dark },
      },
    },
  }) => `
    color: ${variant ? white : dark};
  `}
`;

const Card = ({ ribbon, children, ...rest }) => (
  <CardShadow>
    <CardStyled {...rest}>
      {Object.keys(ribbon).length > 0 && (
        <Ribbon
          variant={ribbon.variant}
          variantIntensity={ribbon.variantIntensity}
        >
          <RibbonText variant={ribbon.variant}>{ribbon.text}</RibbonText>
        </Ribbon>
      )}
      {children}
    </CardStyled>
  </CardShadow>
);

Card.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the ribbon following the theme (primary, secondary, tertiary)
   * variantIntensity: ribbon variant color intensity (0, 1, 2, 3) */
  ribbon: shape({
    text: string,
    variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
    variantIntensity: oneOf([0, 1, 2, 3]),
  }),
  children: node,
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['', 'primary', 'secondary', 'tertiary']),
  /** intensity of variant color (0, 1, 2, 3) */
  variantIntensity: oneOf([0, 1, 2, 3]),
};

Card.defaultProps = {
  ribbon: {},
  children: null,
  variant: '',
  variantIntensity: 3,
};

Card.displayName = 'Card';

export default Card;
