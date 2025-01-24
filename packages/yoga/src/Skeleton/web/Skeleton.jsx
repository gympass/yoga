import React from 'react';

import { checkPropTypes, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';

import { margins, widths, heights } from '@gympass/yoga-system';

const StyledSkeleton = styled.div`
  display: flex;
  align-items: center;

  ${margins}

  ${widths}

  ${heights}

  ${({
    color,
    type,
    variant,
    animation = 'pulse',
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
  }) => css`
    background-color: ${backgroundColor};
    ${borderRadius ? `border-radius: ${borderRadius}px;` : ''}
    ${height ? `height: ${height}px;` : ''}

    ${animation &&
    css`
      animation: placeholderShimmer 1.5s ease-in-out 0.5s infinite;
    `}

    @keyframes placeholderShimmer {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
  `}
`;

function Skeleton({ animation = 'pulse', color = 'primary', ...rest }) {
  return <StyledSkeleton {...rest} animation={animation} color={color} />;
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
