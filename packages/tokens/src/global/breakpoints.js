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
 * @type {Object}
 * @property {Object} xxs
 * @property {Object} xs
 * @property {Object} sm
 * @property {Object} md
 * @property {Object} lg
 * @property {Object} xl
 * @property {Object} xxl
 * @property {Object} xxxl
 */

/**
 * @type {Breakpoint}
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
