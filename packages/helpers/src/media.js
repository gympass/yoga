import tokens from '@gympass/yoga-tokens';
import { css } from 'styled-components';

import hide from './hide';

const { breakpoints } = tokens;

const media = {
  not: {},
};

export const not = (isNot) => (isNot ? 'not all and ' : '');

const availableBreakpoints = Object.keys(breakpoints);

const getRange = (width, range) => {
  try {
    if (Array.isArray(width)) {
      const [min, max] = width;

      const {
        [min]: { width: minBreakpoint },
        [max]: { width: maxBreakpoint },
      } = breakpoints;

      return `(min-width: ${minBreakpoint}px) and (max-width: ${maxBreakpoint}px)`;
    }

    return `(${range}-width: ${breakpoints[width].width}px)`;
  } catch {
    const msg = `Make sure you've entered the right breakpoints. 
  Your input: ${Array.isArray(width) ? width.join(', ') : width}
  Available breakpoints: ${availableBreakpoints.join(', ')}`;

    throw new Error(msg);
  }
};

export const matcher =
  (width, isNot = false, range = 'min') =>
  (...style) =>
    css`
      @media ${not(isNot)}${getRange(width, range)} {
        ${css(...style)}
      }
    `;

availableBreakpoints.forEach((breakpoint) => {
  media[breakpoint] = matcher(breakpoint);
  media.not[breakpoint] = matcher(breakpoint, true);
});

media.max = (width) => matcher(width, false, 'max');
media.not.max = (width) => matcher(width, true, 'max');

media.between = (min, max) => matcher([min, max], false, 'max');
media.not.between = (min, max) => matcher([min, max], true, 'max');

media.hide = hide();
media.not.hide = hide(true);

export default media;
