/**
 * @module radii
 * @desc Border radius (radii) tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A border radius (radii)
 * @typedef Radii
 *
 * @type {Object}
 * @property {number} sharp A sharp value for border radius (0 radius)
 * @property {number} xsmall A semi-rounded value for border radius (4 radius)
 * @property {number} small A rounded value for border radius (8 radius)
 * @property {number} regular A rounded value for border radius (16 radius)
 * @property {String} circle A circle value for border radius (9999 radius)
 */

/**
 * @type {Radii}
 * @default
 */
const radii = [0, 4, 8, 16, 9999];
[radii.sharp, radii.xsmall, radii.small, radii.regular, radii.circle] = radii;

export default radii;
