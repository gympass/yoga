import tokens, { BreakpointsType }  from '@gympass/yoga-tokens';

const { breakpoints } = tokens;

import { css } from 'styled-components';

import { not } from './media';
import { Entries, Hide } from './types';

const availableBreakpoints = Object.entries(
  breakpoints
) as unknown as Entries<BreakpointsType>;

const hide = (isNot = false) =>
  availableBreakpoints.reduce((acc, [key, breakpoint], index) => {
    if (index === 0) {
      const [, secondBreakpoint] = availableBreakpoints[index + 1];

      acc[key] = css`
        @media ${not(isNot)} (max-width: ${secondBreakpoint.width}px) {
          display: none !important;
        }
      `;

      acc[`${key}-start`] = css`
        @media ${not(isNot)} (min-width: ${breakpoint.width}px) {
          display: none !important;
        }
      `;

      return acc;
    }

    if (index === availableBreakpoints.length - 1) {
      acc[key] = css`
        @media ${not(isNot)} (min-width: ${breakpoint.width}px) {
          display: none !important;
        }
      `;

      return acc;
    }
    const [, nextBreakpoint] = availableBreakpoints[index + 1];

    acc[key] = css`
      @media ${not(isNot)} (min-width: ${breakpoint.width}px) and (max-width: ${nextBreakpoint.width - 1}px) {
        display: none !important;
      }
    `;

    acc[`${key}-start`] = css`
      @media ${not(isNot)} (min-width: ${breakpoint.width}px) {
        display: none !important;
      }
    `;

    return acc;
  }, {} as Hide);

export default hide;
