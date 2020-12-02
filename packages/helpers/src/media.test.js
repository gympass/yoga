/* eslint-disable import/no-named-as-default-member */
import tokens from '@gympass/yoga-tokens';

import media, { matcher, not } from './media';

const { breakpoints } = tokens;

const formatCss = style =>
  Array.isArray(style)
    ? style.join().replace(/,|\s*/g, '')
    : style.replace(/,|\s*/g, '');

const expectedStyle = (...args) =>
  formatCss(matcher(...args)`
padding: 10px;
`);

const expectedHideStyle = breakpoint =>
  formatCss(`@media (min-width: ${breakpoints[breakpoint].width}px) {
  display: none !important;
}`);

describe('media', () => {
  it.each(Object.keys(breakpoints))('.%s', breakpoint => {
    const style = media[breakpoint]`
      padding: 10px;
      `;

    expect(formatCss(style)).toBe(expectedStyle(breakpoint));
  });

  it.each(Object.keys(breakpoints))('.not.%s', breakpoint => {
    const notStyle = media.not[breakpoint]`
        padding: 10px;
      `;

    expect(formatCss(notStyle)).toBe(expectedStyle(breakpoint, true));
  });

  describe('max', () => {
    it.each(Object.keys(breakpoints))(".max('%s')", breakpoint => {
      const style = media.max(breakpoint)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle(breakpoint, false, 'max'));
    });

    it.each(Object.keys(breakpoints))(".not.max('%s')", breakpoint => {
      const style = media.not.max(breakpoint)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle(breakpoint, true, 'max'));
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
      const style = media.between(min, max)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle([min, max], false));
    });

    it.each(comparisons)(".not.between('%s', '%s')", (min, max) => {
      const style = media.not.between(min, max)`
        padding: 10px;
        `;

      expect(formatCss(style)).toBe(expectedStyle([min, max], true));
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
