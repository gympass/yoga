import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, string, oneOfType, number } from 'prop-types';
import get from 'lodash.get';

const StyledSpinner = styled.div`
  .circular {
    top: 20%;
    left: 50%;
    width: 50px;
    height: 50px;
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dash 1.5s ease-in-out infinite,
      color 6s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = ({ size, color, theme }) => {
  console.log(size);
  return (
    <StyledSpinner>
      <svg className="circular" width={size} height={size}>
        <circle
          className="path"
          cx="25"
          cy="25.2"
          r="19.9"
          fill="none"
          strokeWidth="3"
          strokeMiterlimit="10"
          stroke={get(theme.yoga.colors, color, color)}
        />
      </svg>
    </StyledSpinner>
  );
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
  size: 'medium',
  color: 'light',
};

export default withTheme(Spinner);
