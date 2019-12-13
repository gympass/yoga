/**
 * @module lineheight
 * @desc Line height tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * The line height
 * @typedef LineHeight
 *
 * @type {Object}
 * @property {number} xxsmall -12
 * @property {number} xsmall - 16
 * @property {number} small - 20
 * @property {number} medium - 24
 * @property {number} large - 32
 * @property {number} xlarge - 40
 */

/**
 * @type {LineHeight}
 * @default
 */
const lineHeight = [12, 16, 20, 24, 32, 40];

[
  lineHeight.xxsmall,
  lineHeight.xsmall,
  lineHeight.small,
  lineHeight.medium,
  lineHeight.large,
  lineHeight.xlarge,
] = lineHeight;

export default lineHeight;
