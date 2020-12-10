import tokens from '@gympass/yoga-tokens';
import { css } from 'styled-components';
import { not } from './media';

const { breakpoints } = tokens;
const availableBreakpoints = Object.entries(breakpoints);

const hide = isNot =>
  availableBreakpoints.reduce((acc, [key, breakpoint], index) => {
    if (index === 0) {
      acc[key] = css`
        @media ${not(isNot)} (max-width: ${breakpoint.width}px) {
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
      @media ${not(
          isNot,
        )} (min-width: ${breakpoint.width}px) and (max-width: ${nextBreakpoint.width -
          1}px) {
        display: none !important;
      }
    `;

    acc[`${key}-start`] = css`
      @media ${not(isNot)} (min-width: ${breakpoint.width}px) {
        display: none !important;
      }
    `;

    return acc;
  }, {});

export default hide;
