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
const fontWeights = [400, 600, 700];

[fontWeights.regular, fontWeights.semibold, fontWeights.bold] = fontWeights;

export default fontWeights;
