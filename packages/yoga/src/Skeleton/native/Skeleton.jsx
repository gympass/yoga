import { number, oneOf } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import styled, { css } from 'styled-components';

const textVariantsModifier = {
  h1: theme => css`
    height: ${theme.spacing.xxxlarge}px;
  `,
  h2: theme => css`
    height: ${theme.fontSizes.huge}px;
  `,
  h3: theme => css`
    height: ${theme.fontSizes.xxxlarge}px;
  `,
  h4: theme => css`
    height: ${theme.fontSizes.xxlarge}px;
  `,
  h5: () => css`
    height: 28px;
  `,
  body1: theme => css`
    height: ${theme.fontSizes.xlarge}px;
  `,
  body2: theme => css`
    height: ${theme.fontSizes.large}px;
  `,
  overline: theme => css`
    height: ${theme.fontSizes.medium}px;
  `,
  exception: theme => css`
    height: ${theme.fontSizes.xsmall}px;
  `,
};

const skeletonTypesModifier = {
  circular: () => css`
    border-radius: 1000;
  `,
  rectangular: () => css``,
  text: (theme, variant) => css`
    ${textVariantsModifier[variant](theme)};
  `,
};

const StyledSkeleton = styled.View`
  ${({ theme: { yoga }, type, width, height, variant }) => css`
    display: flex;
    align-items: center;

    width: ${width}px;
    height: ${height}px;

    background: ${yoga.colors.light};

    ${skeletonTypesModifier[type](yoga, variant)};
  `}
`;

function Skeleton({ animation = 'pulse', ...props }) {
  const [opacity] = useState(new Animated.Value(0.1));

  useEffect(() => {
    if (animation) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <StyledSkeleton {...props} />
    </Animated.View>
  );
}

Skeleton.propTypes = {
  /**
   * Determines which type will be rendered. It can be
   * 'circular', 'rectangular' or 'text'.
   */
  type: oneOf(['circular', 'rectangular', 'text']).isRequired,
  /**
   * Determine the width of the skeleton.
   * Applicable to all variants.
   */
  width: number.isRequired,
  /**
   * Determine the height of the skeleton.
   * Applicable only to circular and rectangular variants.
   */
  height: number.isRequired,

  /**
   * Determine if the animation will 'pulse' or false;
   */
  animation: oneOf(['pulse', false]),
};

Skeleton.defaultProps = {
  animation: 'pulse',
};

export default Skeleton;
