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
 * @property {Number} width
 * @property {Number} margin
 * @property {Number} gutter
 */
/**
 * A breakpoint
 * @typedef Breakpoints
 *
 * @type {Object}
 * @property {Breakpoint} xxs
 * @property {Breakpoint} xs
 * @property {Breakpoint} sm
 * @property {Breakpoint} md
 * @property {Breakpoint} lg
 * @property {Breakpoint} xl
 * @property {Breakpoint} xxl
 * @property {Breakpoint} xxxl
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
