/**
 * @module transition
 * @desc Transitions tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A timing
 * @typedef Timing
 *
 * @type {Number[]}
 */

/**
 * A transition
 * @typedef Transition
 *
 * @type {Object}
 * @property {Number[]} duration
 * @property {Timing[]} timing
 */

const duration = [500];
const timing = [[0, 0.75, 0.1, 1]];

/**
 * @type {Transition}
 * @default
 */
const transition = {
  duration,
  timing,
};

export default transition;
