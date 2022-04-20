import { number, arrayOf, oneOf } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import { media } from '@gympass/yoga-helpers';

const { breakpoints } = tokens;

const columnPosition = (props) => {
  const breakpointKeys = Object.keys(breakpoints);
  const position = breakpointKeys
    .filter((breakpoint) => props[breakpoint])
    .map(
      (filteredBreakpoint) => media[filteredBreakpoint]`
        grid-column-end: span ${props[filteredBreakpoint] || 12};
      `,
    );

  const starts = breakpointKeys
    .filter((breakpoint) => props[`${breakpoint}-start`])
    .map(
      (start) => media[start]`
        grid-column-start: ${props[`${start}-start`]};
      `,
    );

  return [...position, ...starts];
};

const hideColumn = (hideProp) =>
  hideProp.map((breakpoint) => media.hide[breakpoint]);

const Col = styled.div`
  box-sizing: border-box;

  min-width: 0;
  min-height: 0;

  ${(props) => columnPosition(props)}

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
  'xxs-start': number,
  'xs-start': number,
  'sm-start': number,
  'md-start': number,
  'lg-start': number,
  'xl-start': number,
  'xxl-start': number,
  'xxxl-start': number,
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
  'xxs-start': undefined,
  'xs-start': undefined,
  'sm-start': undefined,
  'md-start': undefined,
  'lg-start': undefined,
  'xl-start': undefined,
  'xxl-start': undefined,
  'xxxl-start': undefined,
};

export default Col;
