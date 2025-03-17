import { checkPropTypes, oneOf } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components';
import { margins, widths, heights } from '@gympass/yoga-system';

const StyledSkeleton = styled.View`
  display: flex;
  align-items: center;

  ${margins}

  ${widths}

  ${heights}

   ${({
    color,
    type,
    variant,
    theme: {
      yoga: {
        components: {
          skeleton: {
            border: { [type]: borderRadius },
            height: { [type]: { [variant]: height } = {} },
            background: { [color]: backgroundColor },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor};
    ${borderRadius ? `border-radius: ${borderRadius}px;` : ''}
    ${height ? `height: ${height}px;` : ''}
  `}
`;

function Skeleton({
  animation = 'pulse',
  variant = undefined,
  color = 'primary',
  ...rest
}) {
  const [opacity] = useState(new Animated.Value(0.4));

  useEffect(() => {
    if (animation) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            delay: 500,
            duration: 1000,
            easing: Easing.inOut(Easing.linear),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.4,
            duration: 500,
            easing: Easing.inOut(Easing.linear),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <StyledSkeleton variant={variant} color={color} {...rest} />
    </Animated.View>
  );
}

Skeleton.propTypes = {
  /**
   * Determines which color will be rendered. It can be
   * 'primary' or 'secondary'.
   */
  color: oneOf(['primary', 'secondary']),
  /**
   * Determines which type will be rendered. It can be
   * 'circular', 'rectangular' or 'text'.
   */
  type: oneOf(['circular', 'rectangular', 'text']).isRequired,
  /**
   * style the skeleton following the theme (the variant prop can only be used assemble to type "text").
   * It can be 'h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2', 'overline', or 'exception'
   */
  variant: (props, propName, componentName) => {
    const { type } = props;

    if (type !== 'text' && !!props[propName]) {
      return new Error(
        `The ${propName} prop must only be used when the type is equal to "text".`,
      );
    }

    if (type === 'text') {
      return checkPropTypes(
        {
          [propName]: oneOf([
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'body1',
            'body2',
            'overline',
            'exception',
          ]).isRequired,
        },
        props,
        'prop',
        componentName,
      );
    }
    return null;
  },
  /**
   * Determine if the animation will 'pulse' or false;
   */
  animation: oneOf(['pulse', false]),
};

export default Skeleton;
