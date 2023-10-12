import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
  oneOf,
  string,
  oneOfType,
  number,
} from 'prop-types';
import get from 'lodash.get';

const StyledSpinner = styled.div`
  ${({
    color,
    size,
    theme: {
      yoga: {
        components: { spinner },
      },
    },
  }) => `
    .spinner1 {
      width: ${size}px;
      padding: calc(${size}px * 0.1);
      aspect-ratio: 1;
      border-radius: 50%;
      background: ${color};
      mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
      -webkit-mask-composite: source-out;
      mask-composite: subtract;
      animation: rotation 1s linear infinite ;
    }

    .spinner2 {
      display: inline-block;
      width: ${size}px;
      height: ${size}px;
      color: ${color};
      animation: 1.4s linear 0s infinite normal none running rotation;
    }

    .circular {
      display: block;
    }

    .path {
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
      -webkit-animation: 1.4s ease-in-out 0s infinite normal none running dash;
      animation: 1.4s ease-in-out 0s infinite normal none running dash;
      stroke-linecap: round;
      stroke: ${color};
    }

    @keyframes rotation {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
      }
      100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
      }
    }
  `}
`;

const Spinner = ({size, color, theme}) => {
  return (
    <StyledSpinner color={get(theme.yoga.colors, color, color)} size={get(theme.yoga.spacing, size, size)}>
      {/*<div class='spinner1' />*/}

      <span class='spinner2'>
        <svg class="circular" viewBox="22 22 44 44">
          <circle class="path" fill="none" stroke-width="3.6" cx="44" cy="44" r="20.2"></circle>
        </svg>
      </span>
    </StyledSpinner>
  )
};

const commonSizes = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
  'huge',
  'xhuge',
];

Spinner.propTypes = {
  size: oneOfType([oneOf(commonSizes), string, number]),
  color: String,
};

Spinner.defaultProps = {
  size: 'xxlarge',
  color: 'light'
};

export default withTheme(Spinner);
