import { bool } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';

import hideQuery from './hideQuery';

const { breakpoints } = tokens;

const Hide = styled.div`
  ${props =>
    Object.keys(props)
      .filter(prop => props[prop] && Object.keys(breakpoints).includes(prop))
      .map(breakpoint => hideQuery(breakpoints)[breakpoint])}
`;

Hide.propTypes = {
  xxs: bool,
  xs: bool,
  sm: bool,
  md: bool,
  lg: bool,
  xl: bool,
  xxl: bool,
  xxxl: bool,
};

Hide.defaultProps = {
  xxs: undefined,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
  xxxl: undefined,
};

export default Hide;
