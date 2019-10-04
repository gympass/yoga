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
 * @property {number} xxsmall
 * @property {number} xsmall
 * @property {number} small
 * @property {number} medium
 * @property {number} large
 * @property {number} xlarge
 * @property {number} xxlarge
 * @property {number} xxxlarge
 * @property {number} huge
 */

/**
 * @type {Spacing}
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
