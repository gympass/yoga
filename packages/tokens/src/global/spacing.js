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
 * @property {number} zero - 0
 * @property {number} xxsmall - 4
 * @property {number} xsmall - 8
 * @property {number} small - 12
 * @property {number} medium - 16
 * @property {number} large - 20
 * @property {number} xlarge - 24
 * @property {number} xxlarge - 40
 * @property {number} xxxlarge - 56
 * @property {number} huge - 72
 */

/**
 * @type {Spacing}
 * @default
 */
const spacing = [0, 4, 8, 12, 16, 20, 24, 40, 56, 72];
[
  spacing.zero,
  spacing.xxsmall,
  spacing.xsmall,
  spacing.small,
  spacing.medium,
  spacing.large,
  spacing.xlarge,
  spacing.xxlarge,
  spacing.xxxlarge,
  spacing.huge,
] = spacing;

export default spacing;
