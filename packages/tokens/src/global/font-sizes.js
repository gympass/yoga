/**
 * @module fontsizes
 * @desc Font sizes tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * @typedef {number} FontSize
 */

/**
 * A font size
 * @typedef FontSizes
 *
 * @type {Object}
 * @property {FontSize} xxsmall - 10
 * @property {FontSize} xsmall - 12
 * @property {FontSize} small - 14
 * @property {FontSize} medium - 16
 * @property {FontSize} large - 20
 * @property {FontSize} xlarge - 24
 * @property {FontSize} xxlarge - 32
 * @property {FontSize} xxxlarge - 40
 * @property {FontSize} huge - 48
 */

/**
 * @type {FontSizes}
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
