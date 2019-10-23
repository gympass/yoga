/**
 * @module fontweight
 * @desc Font Weights tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A font weight
 * @typedef FontWeight
 *
 * @type {Object}
 * @property {number} light - 300
 * @property {number} regular - 400
 * @property {number} bold - 700
 */

/**
 * @type {FontWeight}
 * @default
 */
const fontWeights = [300, 400, 700];

[fontWeights.light, fontWeights.regular, fontWeights.bold] = fontWeights;

export default fontWeights;
