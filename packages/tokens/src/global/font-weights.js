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
 * @property {number} light - 300
 * @property {number} regular - 400
 * @property {number} medium - 500
 * @property {number} bold - 700
 * @property {number} black - 900
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
