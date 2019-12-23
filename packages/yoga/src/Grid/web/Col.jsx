import { number, arrayOf, oneOf } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import query from './query';
import hideQuery from './hideQuery';

const { breakpoints } = tokens;

const columnPosition = (
  {
    xxs,
    xs = xxs,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    xxl = xl,
    xxxl = xxl,
    'xxs-offset': xxsOffset,
    'xs-offset': xsOffset = xxsOffset,
    'sm-offset': smOffset = xsOffset,
    'md-offset': mdOffset = smOffset,
    'lg-offset': lgOffset = mdOffset,
    'xl-offset': xlOffset = lgOffset,
    'xxl-offset': xxlOffset = xlOffset,
    'xxxl-offset': xxxlOffset = xxlOffset,
  },
  breakpoint,
) => {
  const q = query()[breakpoint];

  const screenDefinitions = {
    xxs: {
      size: xxs,
      offset: xxsOffset,
    },
    xs: {
      size: xs,
      offset: xsOffset,
    },
    sm: {
      size: sm,
      offset: smOffset,
    },
    md: {
      size: md,
      offset: mdOffset,
    },
    lg: {
      size: lg,
      offset: lgOffset,
    },
    xl: {
      size: xl,
      offset: xlOffset,
    },
    xxl: {
      size: xxl,
      offset: xxlOffset,
    },
    xxxl: {
      size: xxxl,
      offset: xxxlOffset,
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
`;

Col.propTypes = {
  hide: arrayOf(oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'])),
  xxs: number,
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  xxl: number,
  xxxl: number,
  'xxs-offset': number,
  'xs-offset': number,
  'sm-offset': number,
  'md-offset': number,
  'lg-offset': number,
  'xl-offset': number,
  'xxl-offset': number,
  'xxxl-offset': number,
};

Col.defaultProps = {
  hide: undefined,
  xxs: undefined,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
  xxxl: undefined,
  'xxs-offset': undefined,
  'xs-offset': undefined,
  'sm-offset': undefined,
  'md-offset': undefined,
  'lg-offset': undefined,
  'xl-offset': undefined,
  'xxl-offset': undefined,
  'xxxl-offset': undefined,
};

export default Col;
