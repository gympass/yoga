import { elevate } from '@gympass/yoga-common';
import colors from './colors';

/**
 * @module elevation
 * @desc Elevation (z-index) tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * An elevation
 * @typedef Elevation
 *
 * @type {Object}
 * @property {String} zero - none
 * @property {String} small - 0 2px 6px rgba(152, 152, 166, 0.25)
 * @property {String} medium - 0 4px 12px rgba(152, 152, 166, 0.25)
 * @property {String} large - 0 8px 20px rgba(152, 152, 166, 0.25)
 */

/**
 * @type Elevation
 * @default
 */
const elevations = elevate(colors.medium);

[
  elevations.zero,
  elevations.small,
  elevations.medium,
  elevations.large,
] = elevations;

export default elevations;
