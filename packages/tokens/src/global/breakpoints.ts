export const breakpoints = {
  xxs: {
    width: 0,
    margin: 20,
    gutter: 16,
  },

  xs: {
    width: 360,
    margin: 20,
    gutter: 16,
  },

  sm: {
    width: 480,
    margin: 20,
    gutter: 16,
  },

  md: {
    width: 768,
    margin: 20,
    gutter: 16,
  },

  lg: {
    width: 1024,
    margin: 71,
    gutter: 24,
  },

  xl: {
    width: 1200,
    margin: 71,
    gutter: 24,
  },

  xxl: {
    width: 1366,
    margin: 71,
    gutter: 24,
  },

  xxxl: {
    width: 1600,
    margin: 71,
    gutter: 24,
  },
} as const;

export type BreakpointsType = typeof breakpoints;

export type BreakpointsKey = keyof BreakpointsType;

export const BREAKPOINTS_KEYS = Object.keys(breakpoints);

export default breakpoints;
