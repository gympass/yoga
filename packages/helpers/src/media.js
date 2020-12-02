import tokens from '@gympass/yoga-tokens';
import { css } from 'styled-components';

import hide from './hide';

const { breakpoints } = tokens;

const media = {
  not: {},
};

export const not = isNot => (isNot ? 'not all and ' : '');

const getRange = (width, range) => {
  if (Array.isArray(width)) {
    const [min, max] = width;

    const {
      [min]: { width: minBreakpoint },
      [max]: { width: maxBreakpoint },
    } = breakpoints;

    return `(min-width: ${minBreakpoint}px) and (max-width: ${maxBreakpoint}px)`;
  }

  return `(${range}-width: ${breakpoints[width].width}px)`;
};

export const matcher = (width, isNot = false, range = 'min') => (
  ...style
) => css`
  @media ${not(isNot)}${getRange(width, range)} {
    ${css(...style)}
  }
`;

Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = matcher(label);
  acc.not[label] = matcher(label, true);

  return acc;
}, media);

media.max = width => matcher(width, false, 'max');
media.not.max = width => matcher(width, true, 'max');

media.between = (min, max) => matcher([min, max], false, 'max');
media.not.between = (min, max) => matcher([min, max], true, 'max');

media.hide = hide();
media.not.hide = hide(true);

export default media;
