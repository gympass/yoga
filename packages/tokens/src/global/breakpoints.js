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
 * @property {Object} xxsmall
 * @property {Object} xsmall
 * @property {Object} small
 * @property {Object} medium
 * @property {Object} large
 * @property {Object} xlarge
 * @property {Object} xxlarge
 * @property {Object} xxxlarge
 */

/**
 * @type {Breakpoint}
 */
const breakpoints = {
  xxsmall: {
    width: 0,
    margin: 20,
    gutter: 16,
  },
  xsmall: {
    width: 360,
    margin: 20,
    gutter: 16,
  },
  small: {
    width: 480,
    margin: 20,
    gutter: 16,
  },
  medium: {
    width: 768,
    margin: 20,
    gutter: 16,
  },
  large: {
    width: 1024,
    margin: 71,
    gutter: 24,
  },
  xlarge: {
    width: 1200,
    margin: 71,
    gutter: 24,
  },
  xxlarge: {
    width: 1366,
    margin: 71,
    gutter: 24,
  },
  xxxlarge: {
    width: 1600,
    margin: 71,
    gutter: 24,
  },
};

export default breakpoints;
