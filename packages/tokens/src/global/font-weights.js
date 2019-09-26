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
 * @property {number} regular regular font weight
 * @property {number} semibold semibold font weight
 * @property {number} bold bold font weight
 */

/**
 * @type {FontWeight}
 * @default
 */
const fontWeights = [400, 600, 700];

[fontWeights.regular, fontWeights.semibold, fontWeights.bold] = fontWeights;

export default fontWeights;
