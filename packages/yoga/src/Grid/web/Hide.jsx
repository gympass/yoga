import { bool } from 'prop-types';
import styled from 'styled-components';
import tokens from '@gympass/yoga-tokens';
import { media } from '@gympass/yoga-helpers';

const { breakpoints } = tokens;

const Hide = styled.div`
  ${(props) =>
    Object.keys(props)
      .filter((prop) => props[prop] && Object.keys(breakpoints).includes(prop))
      .map((breakpoint) => media.hide[breakpoint])}

  ${(props) =>
    Object.keys(props)
      .filter((prop) => props[`${prop}-start`])
      .map((breakpoint) => media.hide[`${breakpoint}-start`])}
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
  'xxs-start': bool,
  'xs-start': bool,
  'sm-start': bool,
  'md-start': bool,
  'lg-start': bool,
  'xl-start': bool,
  'xxl-start': bool,
  'xxxl-start': bool,
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
  'xxs-start': undefined,
  'xs-start': undefined,
  'sm-start': undefined,
  'md-start': undefined,
  'lg-start': undefined,
  'xl-start': undefined,
  'xxl-start': undefined,
  'xxxl-start': undefined,
};

export default Hide;
