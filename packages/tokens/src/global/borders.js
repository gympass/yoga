/**
 * @module borders
 * @desc Borders tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A border
 * @typedef Border
 *
 * @type {Object}
 * @property {number} zero - 0
 * @property {number} small - 1
 * @property {number} medium - 2
 */

/**
 * @type {Border}
 * @default
 */
const border = [0, 1, 2];
[border.zero, border.small, border.medium] = border;

export default border;
