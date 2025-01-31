import React from 'react';
import styled, { withTheme } from 'styled-components';
import { oneOf, string, oneOfType, number } from 'prop-types';
import get from 'lodash.get';

const StyledSpinner = styled.span`
  ${({ color, size }) => `
    .spinner {
      display: inline-block;
      width: ${size}px;
      height: ${size}px;
      color: ${color};
      animation: 1.4s linear 0s infinite normal none running rotation;
    }
    .circular {
      display: block;
      height: 100%;
      width: 100%;
    }
    .path {
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
      -webkit-animation: 1.4s ease-in-out 0s infinite normal none running dash;
      animation: 1.6s ease-in-out 0s infinite normal none running dash;
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

const Spinner = React.forwardRef(
  ({ size = 'medium', color = 'primary', theme }, ref) => {
    return (
      <StyledSpinner
        color={get(theme.yoga.colors, color, color)}
        size={get(theme.yoga.spacing, size, size)}
        ref={ref}
        aria-label="loading-icon"
      >
        <span className="spinner">
          <svg className="circular" viewBox="22 22 44 44">
            <circle
              className="path"
              fill="none"
              strokeWidth="3.6"
              cx="44"
              cy="44"
              r="20.2"
            />
          </svg>
        </span>
      </StyledSpinner>
    );
  },
);

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
  color: string,
};

export default withTheme(Spinner);
