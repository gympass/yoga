import React from 'react';
import styled from 'styled-components';
import { string, shape, oneOf, node } from 'prop-types';

import Text from '../../../Text';

const CardStyled = styled.section`
  ${({
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
  box-shadow: ${card.elevation};
`}
`;

const Ribbon = styled(Text.Tiny)`
  ${({
    variant,
    theme: {
      yoga: {
        components: { card },
        spacing,
        colors: { elements, [variant]: color, white, text },
      },
    },
  }) => `
  display: inline-block;
  top: ${card.padding.top}px;
  left: 0;

  margin-left: -${card.padding.left}px;
  margin-bottom: ${card.padding.bottom}px;

  padding: 
    ${spacing.xxxsmall}px
    ${spacing.xsmall}px
    ${spacing.xxxsmall}px
    ${spacing.small}px;
  
  border-top-right-radius: ${card.ribbon.radius}px;
  border-bottom-right-radius: ${card.ribbon.radius}px;

  background-color: ${variant ? color : elements.backgroundAndDisabled};

  color: ${variant ? white : text.primary};
  `}
`;

const Card = ({ ribbon, children, ...rest }) => (
  <CardStyled {...rest}>
    {Object.keys(ribbon).length > 0 && (
      <Ribbon variant={ribbon.variant} as="span">
        {ribbon.text}
      </Ribbon>
    )}
    {children}
  </CardStyled>
);

Card.propTypes = {
  /** text: the content inside the Card Ribbon.
   * variant: style the card following the theme (primary, secondary, vibin, hope,
   * energy, relax, peace, verve, uplift, deepPurple, deep, stamina, dark,
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
};

Card.defaultProps = {
  ribbon: {},
  children: null,
};

Card.displayName = 'Card';

export default Card;
