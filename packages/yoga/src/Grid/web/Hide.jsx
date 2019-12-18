import { bool } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';

import hideQuery from '../hideQuery';

const { breakpoints } = tokens;

const Hide = styled.div`
  ${props =>
    Object.keys(props)
      .filter(prop => props[prop] && Object.keys(breakpoints).includes(prop))
      .map(breakpoint => hideQuery(breakpoints)[breakpoint])}
`;

Hide.propTypes = {
  xxsmall: bool,
  xsmall: bool,
  small: bool,
  medium: bool,
  large: bool,
  xlarge: bool,
  xxlarge: bool,
  xxxlarge: bool,
};

Hide.defaultProps = {
  xxsmall: undefined,
  xsmall: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
  xlarge: undefined,
  xxlarge: undefined,
  xxxlarge: undefined,
};

export default Hide;
