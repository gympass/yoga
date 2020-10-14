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
    theme: {
      yoga: {
        colors: { [variant]: color },
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
    background-color: ${variant ? color : card.backgroundColor};
    elevation: 4;
    overflow: hidden;
`,
);

const Ribbon = styled.View`
  ${({
    variant,
    theme: {
      yoga: {
        components: { card },
        spacing,
        colors: { elements, [variant]: color, white, dark },
      },
    },
  }) => `
    align-self: flex-start;

    margin-bottom: ${card.padding.bottom}px;
    margin-left: -${card.padding.left}px;

    padding: 
      ${spacing.xxxsmall}px
      ${spacing.xsmall}px
      ${spacing.xxxsmall}px
      ${spacing.small}px;
    
    border-top-right-radius: ${card.ribbon.radius}px;
    border-bottom-right-radius: ${card.ribbon.radius}px;
    background-color: ${variant ? color : elements.backgroundAndDisabled};

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
        <Ribbon variant={ribbon.variant}>
          <RibbonText variant={ribbon.variant}>{ribbon.text}</RibbonText>
        </Ribbon>
      )}
      {children}
    </CardStyled>
  </CardShadow>
);

Card.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the card following the theme (primary, secondary, vibin,
   * hope, energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
   * medium, light, clear, white) */
  ribbon: shape({
    text: string,
    variant: oneOf([
      '',
      'primary',
      'secondary',
      'vibin',
      'hope',
      'energy',
      'relax',
      'peace',
      'verve',
      'uplift',
      'deepPurple',
      'stamina',
      'dark',
      'medium',
      'deep',
      'light',
      'clear',
      'white',
    ]),
  }),
  children: node,
  /** style the card following the theme (primary, secondary, vibin, hope,
   * energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
   * medium, light, clear, white) */
  variant: oneOf([
    '',
    'primary',
    'secondary',
    'vibin',
    'hope',
    'energy',
    'relax',
    'peace',
    'verve',
    'uplift',
    'deepPurple',
    'stamina',
    'dark',
    'medium',
    'deep',
    'light',
    'clear',
    'white',
  ]),
};

Card.defaultProps = {
  ribbon: {},
  children: null,
  variant: '',
};

Card.displayName = 'Card';

export default Card;
