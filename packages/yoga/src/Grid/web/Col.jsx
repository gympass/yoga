import { number, arrayOf, oneOf } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import query from './query';
import hideQuery from './hideQuery';

const { breakpoints } = tokens;

const columnPosition = props =>
  Object.keys(breakpoints)
    .filter(breakpoint => props[breakpoint])
    .map(filteredBreakpoint => {
      const offset = props[`${filteredBreakpoint}-offset`];

      return query()[filteredBreakpoint]`
        grid-column: ${offset ? `${offset + 1}/` : ''} span ${props[
        filteredBreakpoint
      ] || 12};
      `;
    });

const hideColumn = hideProp =>
  hideProp.map(breakpoint => hideQuery(breakpoints)[breakpoint]);

const Col = styled.div`
  box-sizing: border-box;

  min-width: 0;
  min-height: 0;

  ${props => columnPosition(props)}

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
