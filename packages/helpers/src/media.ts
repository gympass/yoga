import { breakpoints, BREAKPOINTS_KEYS, BreakpointsKey } from '@gympass/yoga-tokens';

import { css } from 'styled-components';

import hide from './hide';
import { Matcher, Media, Width } from './types';

const availableBreakpoints = BREAKPOINTS_KEYS as BreakpointsKey[];

const media: Media = { not: {} } as Media;

export const not = (isNot?: boolean) => (isNot ? 'not all and ' : '');

const getRange = (width: Width, range: 'min' | 'max') => {
  try {
    if (Array.isArray(width)) {
      const [min, max] = width;

      const {
        [min]: { width: minBreakpoint },
        [max]: { width: maxBreakpoint }
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

export const matcher: Matcher =
  (width: Width, isNot = false, range: 'min' | 'max' = 'min') =>
  (...style) => {
    return css`
      @media ${not(isNot)}${getRange(width, range)} {
        ${css(...style)}
      }
    `;
  };

availableBreakpoints.forEach((breakpoint) => {
  media[breakpoint] = matcher(breakpoint);
  media.not[breakpoint] = matcher(breakpoint, true);
});

media.max = (width: Width) => matcher(width, false, 'max');
media.not.max = (width: Width) => matcher(width, true, 'max');

media.between = (min: BreakpointsKey, max: BreakpointsKey) =>
  matcher([min, max], false, 'max');
media.not.between = (min: BreakpointsKey, max: BreakpointsKey) =>
  matcher([min, max], true, 'max');

media.hide = hide();
media.not.hide = hide(true);

export default media;