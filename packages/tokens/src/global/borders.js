/**
 * @module borders
 * @desc Borders tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A border
 * @typedef Border
 *
 * @type {Object}
 * @property {String} zero
 * @property {String} small
 * @property {String} medium
 */

/**
 * @type {Border}
 */
const border = [0, 1, 2];
[border.zero, border.small, border.medium] = border;

export default border;
