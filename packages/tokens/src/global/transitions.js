/**
 * @module transition
 * @desc Transitions tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A transition
 * @typedef Transition
 *
 * @type {Object}
 * @property {String} duration
 * @property {String} timing
 */

const duration = '300ms';
const timing = 'ease';

/**
 * @type {Border}
 * @default
 */
const transitions = [`all ${duration} ${timing}`];
transitions.duration = duration;
transitions.timing = timing;

[transitions.default] = transitions;

export default transitions;
