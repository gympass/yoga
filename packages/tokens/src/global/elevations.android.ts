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
 * @property {String} zero
 * @property {String} small
 * @property {String} medium
 * @property {String} large
 */

/**
 * @type Elevation
 * @default
 */
import { ElevationsProps } from '../types/elevations';

const elevations: ElevationsProps = [0, 4, 8, 12];

[elevations.zero, elevations.small, elevations.medium, elevations.large] =
  elevations;

export default elevations;
