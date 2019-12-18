import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import query from '../query';

const { breakpoints } = tokens;

const columnPosition = (
  {
    xxsmall,
    xsmall = xxsmall,
    small = xsmall,
    medium = small,
    large = medium,
    xlarge = large,
    xxlarge = xlarge,
    xxxlarge = xxlarge,
  },
  breakpoint,
) => {
  const q = query()[breakpoint];

  const screenDefinitions = {
    xxsmall: {
      size: xxsmall,
    },
    xsmall: {
      size: xsmall,
    },
    small: {
      size: small,
    },
    medium: {
      size: medium,
    },
    large: {
      size: large,
    },
    xlarge: {
      size: xlarge,
    },
    xxlarge: {
      size: xxlarge,
    },
    xxxlarge: {
      size: xxxlarge,
    },
  };

  const { size } = screenDefinitions[breakpoint];

  return q`grid-column: span ${size || 12};`;
};

const Col = styled.div`
  ${props =>
    Object.keys(breakpoints).map(breakpoint =>
      columnPosition(props, breakpoint),
    )}

  box-sizing: border-box;

  min-width: 0;
  min-height: 0;

  border: 1px solid;

  background-color: #ffbaba;
`;

Col.propTypes = {
  xxsmall: number,
  xsmall: number,
  small: number,
  medium: number,
  large: number,
  xlarge: number,
  xxlarge: number,
  xxxlarge: number,
};

export default Col;
