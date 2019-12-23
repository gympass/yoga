import { css } from 'styled-components';
import tokens from '@gympass/yoga-tokens';

import query from './query';

const { breakpoints } = tokens;
const formatCss = style => style.join().replace(/,|\s*/g, '');

describe('query helper function', () => {
  it('should create a media query rule for all breakpoints', () => {
    const expectedStyle = breakpoint => css`
      @media (min-width: ${breakpoint.width}px) {
        padding: 10px;
      }
    `;

    Object.keys(breakpoints).map(breakpoint => {
      const style = query()[breakpoint]`
          padding: 10px;
        `;

      return expect(formatCss(style)).toBe(
        formatCss(expectedStyle(breakpoints[breakpoint])),
      );
    });
  });
});
