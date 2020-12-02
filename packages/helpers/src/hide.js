import tokens from '@gympass/yoga-tokens';
import { css } from 'styled-components';
import { not } from './media';

const {
  breakpoints: { xxs, xs, sm, md, lg, xl, xxl, xxxl },
} = tokens;

const hide = isNot => ({
  xxs: css`
    @media ${not(isNot)} (max-width: ${xs.width}px) {
      display: none !important;
    }
  `,
  'xxs-start': css`
    @media ${not(isNot)} (min-width: ${xxs.width}px) {
      display: none !important;
    }
  `,
  xs: css`
    @media ${not(isNot)} (min-width: ${xs.width}px) and (max-width: ${sm.width -
        1}px) {
      display: none !important;
    }
  `,
  'xs-start': css`
    @media ${not(isNot)} (min-width: ${xs.width}px) {
      display: none !important;
    }
  `,
  sm: css`
    @media ${not(isNot)} (min-width: ${sm.width}px) and (max-width: ${md.width -
        1}px) {
      display: none !important;
    }
  `,
  'sm-start': css`
    @media ${not(isNot)} (min-width: ${sm.width}px) {
      display: none !important;
    }
  `,
  md: css`
    @media ${not(isNot)} (min-width: ${md.width}px) and (max-width: ${lg.width -
        1}px) {
      display: none !important;
    }
  `,
  'md-start': css`
    @media ${not(isNot)} (min-width: ${md.width}px) {
      display: none !important;
    }
  `,
  lg: css`
    @media ${not(isNot)} (min-width: ${lg.width}px) and (max-width: ${xl.width -
        1}px) {
      display: none !important;
    }
  `,
  'lg-start': css`
    @media ${not(isNot)} (min-width: ${lg.width}px) {
      display: none !important;
    }
  `,
  xl: css`
    @media ${not(
        isNot,
      )} (min-width: ${xl.width}px) and (max-width: ${xxl.width - 1}px) {
      display: none !important;
    }
  `,
  'xl-start': css`
    @media ${not(isNot)} (min-width: ${xl.width}px) {
      display: none !important;
    }
  `,
  xxl: css`
    @media ${not(
        isNot,
      )} (min-width: ${xxl.width}px) and (max-width: ${xxxl.width - 1}px) {
      display: none !important;
    }
  `,
  'xxl-start': css`
    @media ${not(isNot)} (min-width: ${xxl.width}px) {
      display: none !important;
    }
  `,
  xxxl: css`
    @media ${not(isNot)} (min-width: ${xxxl.width}px) {
      display: none !important;
    }
  `,
});

export default hide;
