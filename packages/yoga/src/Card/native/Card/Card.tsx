import React from 'react';
import styled from 'styled-components';
import { string, shape, oneOf, node, InferProps } from 'prop-types';

import Text from '../../../Text/index.native';
import Box from '../../../Box/index.native';
import type { View } from 'react-native';

const CardShadow = styled(Box).attrs(
  ({
    theme: {
      yoga: {
        components: {
          card: { elevation },
        },
      },
    },
  }) => ({
    elevation,
  }),
)``;

const CardStyled = styled(Box).attrs<{ variant: string }>(
  ({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color },
        components: { card },
      },
    },
  }) => ({
    elevation: card.elevation,
    pt: card.padding.top,
    pr: card.padding.right,
    pb: card.padding.bottom,
    pl: card.padding.left,
    bRadius: card.radii,
    bgColor: variant ? color : card.backgroundColor,
    overflow: 'hidden',
  }),
)``;

const Ribbon = styled.View<{ variant: string; children: React.ReactNode }>`
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

const propTypes = {
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

// TODO: Use system typing
type CardProps = InferProps<typeof propTypes> & { [key: string]: any };

const Card = React.forwardRef<View, CardProps>(
  ({ ribbon, children, ...rest }, ref) => (
    <CardShadow>
      <CardStyled ref={ref} {...rest}>
        {Object.keys(ribbon as {}).length > 0 && (
          <Ribbon variant={ribbon?.variant as string}>
            <RibbonText variant={ribbon?.variant}>{ribbon?.text}</RibbonText>
          </Ribbon>
        )}
        {children}
      </CardStyled>
    </CardShadow>
  ),
);

Card.propTypes = propTypes;

Card.defaultProps = {
  ribbon: {},
  children: null,
  variant: '',
};

Card.displayName = 'Card';

export default Card;
