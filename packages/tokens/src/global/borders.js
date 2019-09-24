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
 * @property {String} large
 */

/**
 * @type {Border}
 */
const border = [0, 2, 4, 8];

[border.zero, border.small, border.medium, border.large] = border;

export default border;
