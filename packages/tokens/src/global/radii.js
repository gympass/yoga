/**
 * @module radii
 * @desc Border radius (radii) tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A border radios (radii)
 * @typedef Radii
 *
 * @type {Object}
 * @property {number} sharp A sharp value for border radius (0 radius)
 * @property {number} rounded A rounded value for border radius
 * @property {String} circle A circle value for border radius (100% radius)
 */

/**
 * @type {Radii}
 * @default
 */
const radii = [0, 8, '100%'];
[radii.sharp, radii.rounded, radii.circle] = radii;

export default radii;
