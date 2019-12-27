/**
 * @module breakpoints
 * @desc Breakpoints tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */
/**
 * A breakpoint
 * @typedef Breakpoint
 *
 * @property {Object} width
 * @property {Object} margin
 * @property {Object} gutter
 */
/**
 * A breakpoint
 * @typedef Breakpoints
 *
 * @type {Object}
 * @property {Breakpoint} xxs - 0
 * @property {Breakpoint} xs - 360
 * @property {Breakpoint} sm - 480
 * @property {Breakpoint} md - 768
 * @property {Breakpoint} lg - 1024
 * @property {Breakpoint} xl - 1200
 * @property {Breakpoint} xxl - 1366
 * @property {Breakpoint} xxxl - 1600
 */
/**
 * @type {Breakpoints}
 */
const breakpoints = {
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
};

export default breakpoints;
