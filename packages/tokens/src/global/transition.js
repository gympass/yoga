/**
 * @module transition
 * @desc Transitions tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A transition
 * @typedef Transition
 *
 * @type {Object}
 * @property {Array} duration
 * @property {Array} timing
 */

const duration = [500];
const timing = [[0, 0.75, 0.1, 1]];

/**
 * @type {Transition}
 * @default
 */
const transition = {
  default: `all ${duration[0]} cubic-bezier(${timing[0].join(',')})`,
  duration,
  timing,
};

export default transition;
