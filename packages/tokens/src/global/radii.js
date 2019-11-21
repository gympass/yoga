/**
 * @module radii
 * @desc Border radius (radii) tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A border radios (radii)
 * @typedef Radii
 *
 * @type {Object}
 * @property {number} sharp A sharp value for border radius (0 radius)
 * @property {number} semiRounded A semi-rounded value for border radius (4 radius)
 * @property {number} rounded A rounded value for border radius (8 radius)
 * @property {String} circle A circle value for border radius (100% radius)
 */

/**
 * @type {Radii}
 * @default
 */
const radii = [0, 4, 8, 9999];
[radii.sharp, radii.semiRounded, radii.rounded, radii.circle] = radii;

export default radii;
