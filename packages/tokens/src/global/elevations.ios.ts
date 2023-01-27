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
 * @property {String} zero
 * @property {String} small
 * @property {String} medium
 * @property {String} large
 */

/**
 * @type Elevation
 * @default
 */
import { elevationsProps } from '../types/elevations';

const elevations: elevationsProps = elevate({
  color: colors.medium,
  depth: 1,
  spread: false,
  fallback: true,
});

[elevations.zero, elevations.small, elevations.medium, elevations.large] =
  elevations;

export default elevations;
