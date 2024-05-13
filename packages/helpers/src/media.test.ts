/* eslint-disable import/no-named-as-default-member */
import tokens from '@gympass/yoga-tokens';
import { BREAKPOINTS_KEYS, BreakpointType } from '../../tokens/src/global/breakpoints';

import media, { matcher, not } from './media';
import { Matcher } from './types';

const { breakpoints } = tokens;

const formatCss = style =>
  Array.isArray(style)
    ? style.join().replace(/,|\s*/g, '')
    : style.replace(/,|\s*/g, '');

const expectedStyle: Matcher = (...args) => {
  return formatCss(matcher(...args)`
    padding: 10px;
  `);
};

const expectedHideStyle: (breakpoint: string) => void = breakpoint =>
  formatCss(`@media (min-width: ${breakpoints[breakpoint].width}px) {
  display: none !important;
}`);

describe('media', () => {
  it.each(BREAKPOINTS_KEYS)('.%s', breakpoint => {
    const style = media[breakpoint]`
      padding: 10px;
      `;

    expect(formatCss(style)).toBe(expectedStyle(breakpoint as BreakpointType));
  });

  it.each(BREAKPOINTS_KEYS)('.not.%s', breakpoint => {
    const notStyle = media.not[breakpoint]`
        padding: 10px;
      `;

    expect(formatCss(notStyle)).toBe(expectedStyle(breakpoint as BreakpointType, true));
  });

  describe('max', () => {
    it.each(BREAKPOINTS_KEYS)(".max('%s')", breakpoint => {
      const style = media.max(breakpoint as BreakpointType)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle(breakpoint as BreakpointType, false, 'max'));
    });

    it.each(Object.keys(breakpoints))(".not.max('%s')", breakpoint => {
      const style = media.not.max(breakpoint as BreakpointType)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle(breakpoint as BreakpointType, true, 'max'));
    });
  });

  describe('between', () => {
    const comparisons = [
      ['xxs', 'xs'],
      ['xs', 'sm'],
      ['sm', 'md'],
      ['md', 'lg'],
      ['lg', 'xl'],
      ['xxl', 'xxxl'],
      ['xxs', 'xxxl'],
      ['xs', 'xxl'],
      ['sm', 'xl'],
      ['md', 'lg'],
    ];

    it.each(comparisons)(".between('%s', '%s')", (min, max) => {
      const style = media.between(min as BreakpointType, max as BreakpointType)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle([min as BreakpointType, max as BreakpointType], false));
    });

    it.each(comparisons)(".not.between('%s', '%s')", (min, max) => {
      const style = media.not.between(min as BreakpointType, max as BreakpointType)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle([min as BreakpointType, max as BreakpointType], true));
    });
  });
});

describe('hide', () => {
  const hideMatchers = isNot => ({
    xxs: `@media ${not(isNot)} (max-width: ${breakpoints.xs.width}px) {
      display: none !important;
    }`,
    xs: `@media ${not(isNot)} (min-width: ${
      breakpoints.xs.width
    }px) and (max-width: ${breakpoints.sm.width - 1}px) {
    display: none !important;
  }`,
    sm: `@media ${not(isNot)} (min-width: ${
      breakpoints.sm.width
    }px) and (max-width: ${breakpoints.md.width - 1}px) {
    display: none !important;
  }`,
    md: `@media ${not(isNot)} (min-width: ${
      breakpoints.md.width
    }px) and (max-width: ${breakpoints.lg.width - 1}px) {
    display: none !important;
  }`,
    lg: `@media ${not(isNot)} (min-width: ${
      breakpoints.lg.width
    }px) and (max-width: ${breakpoints.xl.width - 1}px) {
    display: none !important;
  }`,
    xl: `@media ${not(isNot)} (min-width: ${
      breakpoints.xl.width
    }px) and (max-width: ${breakpoints.xxl.width - 1}px) {
    display: none !important;
  }`,
    xxl: `@media ${not(isNot)} (min-width: ${
      breakpoints.xxl.width
    }px) and (max-width: ${breakpoints.xxxl.width - 1}px) {
    display: none !important;
  }`,
    xxxl: `@media ${not(isNot)} (min-width: ${breakpoints.xxxl.width}px) {
      display: none !important;
    }`,
  });

  it.each(Object.entries(hideMatchers(false)))('%s', (breakpoint, query) => {
    expect(formatCss(media.hide[breakpoint])).toBe(formatCss(query));
  });

  it.each(Object.entries(hideMatchers(true)))(
    '.not.%s',
    (breakpoint, query) => {
      expect(formatCss(media.not.hide[breakpoint])).toBe(formatCss(query));
    },
  );

  it.each(Object.keys(breakpoints))('%s-start', breakpoint => {
    const style = media.hide[`${breakpoint}-start`];

    // skip for xxxl
    if (style) {
      expect(formatCss(style)).toBe(expectedHideStyle(breakpoint));
    }
  });
});
