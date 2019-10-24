import { elevate } from '@gympass/common';
/**
 * @module elevation
 * @desc Elevation (z-index) tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * An elevation
 * @typedef Elevation
 *
 * @type {Object}
 * @property {String} zero
 * @property {String} small
 * @property {String} medium
 * @property {String} large
 */

/**
 * @type Elevation
 * @default
 */
const elevations = elevate();
[
  elevations.zero,
  elevations.small,
  elevations.medium,
  elevations.large,
] = elevations;

export default elevations;
