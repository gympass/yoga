/**
 * @module spacing
 * @desc Spacing tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A spacing
 * @typedef Spacing
 *
 * @type {Object}
 * @property {number} zero
 * @property {number} xtiny
 * @property {number} tiny
 * @property {number} xsmall
 * @property {number} small
 * @property {number} base
 * @property {number} medium
 * @property {number} large
 * @property {number} xlarge
 * @property {number} xxlarge
 */

/**
 * @type {Spacing}
 * @default
 */
const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96];
[
  spacing.zero,
  spacing.xtiny,
  spacing.tiny,
  spacing.xsmall,
  spacing.small,
  spacing.base,
  spacing.medium,
  spacing.large,
  spacing.xlarge,
  spacing.xxlarge,
] = spacing;

export default spacing;
