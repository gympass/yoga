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

const duration = ['0.5s'];
const timing = ['cubic-bezier(0, 0.75, 0.1, 1)'];

/**
 * @type {Transition}
 * @default
 */
const transition = {
  default: `all ${duration[0]} ${timing}`,
  duration,
  timing,
};

export default transition;
