import { number, arrayOf, oneOf } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import query from '../query';
import hideQuery from '../hideQuery';

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
    'xxsmall-offset': xxsmallOffset,
    'xsmall-offset': xsmallOffset = xxsmallOffset,
    'small-offset': smallOffset = xsmallOffset,
    'medium-offset': mediumOffset = smallOffset,
    'large-offset': largeOffset = mediumOffset,
    'xlarge-offset': xlargeOffset = largeOffset,
    'xxlarge-offset': xxlargeOffset = xlargeOffset,
    'xxxlarge-offset': xxxlargeOffset = xxlargeOffset,
  },
  breakpoint,
) => {
  const q = query()[breakpoint];

  const screenDefinitions = {
    xxsmall: {
      size: xxsmall,
      offset: xxsmallOffset,
    },
    xsmall: {
      size: xsmall,
      offset: xsmallOffset,
    },
    small: {
      size: small,
      offset: smallOffset,
    },
    medium: {
      size: medium,
      offset: xxsmallOffset,
    },
    large: {
      size: large,
      offset: xxsmallOffset,
    },
    xlarge: {
      size: xlarge,
      offset: xxsmallOffset,
    },
    xxlarge: {
      size: xxlarge,
      offset: xxsmallOffset,
    },
    xxxlarge: {
      size: xxxlarge,
      offset: xxsmallOffset,
    },
  };

  const { size, offset } = screenDefinitions[breakpoint];

  return q`grid-column: ${offset ? `${offset + 1}/` : ''} span ${size || 12};`;
};

const hideColumn = hideProp =>
  hideProp.map(breakpoint => hideQuery(breakpoints)[breakpoint]);

const Col = styled.div`
  box-sizing: border-box;

  min-width: 0;
  min-height: 0;

  ${props =>
    Object.keys(breakpoints).map(breakpoint =>
      columnPosition(props, breakpoint),
    )}

  ${({ hide }) => (hide ? hideColumn(hide) : '')}

  border: 1px solid;

  background-color: #ffbaba;
`;

Col.propTypes = {
  hide: arrayOf(
    oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
      'xxxlarge',
    ]),
  ),
  xxsmall: number,
  xsmall: number,
  small: number,
  medium: number,
  large: number,
  xlarge: number,
  xxlarge: number,
  xxxlarge: number,
  'xxsmall-offset': number,
  'xsmall-offset': number,
  'small-offset': number,
  'medium-offset': number,
  'large-offset': number,
  'xlarge-offset': number,
  'xxlarge-offset': number,
  'xxxlarge-offset': number,
};

Col.defaultProps = {
  hide: undefined,
  xxsmall: undefined,
  xsmall: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
  xlarge: undefined,
  xxlarge: undefined,
  xxxlarge: undefined,
  'xxsmall-offset': undefined,
  'xsmall-offset': undefined,
  'small-offset': undefined,
  'medium-offset': undefined,
  'large-offset': undefined,
  'xlarge-offset': undefined,
  'xxlarge-offset': undefined,
  'xxxlarge-offset': undefined,
};

export default Col;
