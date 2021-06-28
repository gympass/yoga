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
 * @property {number} large - 28
 * @property {number} xlarge - 32
 * @property {number} xxlarge - 40
 * @property {number} xxxlarge - 48
 * @property {number} huge - 56
 */

/**
 * @type {LineHeight}
 * @default
 */
const lineHeight = [12, 16, 20, 24, 28, 32, 40, 48, 56];

[
  lineHeight.xxsmall,
  lineHeight.xsmall,
  lineHeight.small,
  lineHeight.medium,
  lineHeight.large,
  lineHeight.xlarge,
  lineHeight.xxlarge,
  lineHeight.xxxlarge,
  lineHeight.huge,
] = lineHeight;

export default lineHeight;
