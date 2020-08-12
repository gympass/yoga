/**
 * @module fontweight
 * @desc Font Weights tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A font weight
 * @typedef FontWeight
 *
 * @type {Object}
 * @property {number} regular - 400
 * @property {number} semibold - 600
 * @property {number} bold - 700
 */

/**
 * @type {FontWeight}
 * @default
 */
const fontWeights = [300, 400, 500, 700, 900];

[
  fontWeights.light,
  fontWeights.regular,
  fontWeights.medium,
  fontWeights.bold,
  fontWeights.black,
] = fontWeights;

export default fontWeights;
