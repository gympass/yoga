/**
 * @module fontsizes
 * @desc Font sizes tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A font size
 * @typedef FontSize
 *
 * @type {Object}
 * @property {number} xxsmall - 10
 * @property {number} xsmall - 12
 * @property {number} small - 14
 * @property {number} medium - 16
 * @property {number} large - 20
 * @property {number} xlarge - 24
 * @property {number} xxlarge - 32
 * @property {number} xxxlarge - 40
 * @property {number} huge - 48
 */

/**
 * @type {FontSize}
 * @default
 */
const fontSizes = [10, 12, 14, 16, 20, 24, 32, 40, 48];

[
  fontSizes.xxsmall,
  fontSizes.xsmall,
  fontSizes.small,
  fontSizes.medium,
  fontSizes.large,
  fontSizes.xlarge,
  fontSizes.xxlarge,
  fontSizes.xxxlarge,
  fontSizes.huge,
] = fontSizes;

export default fontSizes;
