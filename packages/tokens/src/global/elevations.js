import { hexToRgb } from '@gympass/common';

/**
 * @module elevation
 * @desc Elevation (z-index) tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * Elevation function
 *
 * @param {String} color=#000 - Color to elevate
 * @param {Number} level - Elevation level. It must be between 0 and 4
 * @returns {String}
 */
function elevate(color = '#000', level) {
  const normalizedColor = hexToRgb(color);

  const all = [
    'none',
    `0 2px 6px rgba(${normalizedColor}, 0.25)`,
    `0 4px 12px rgba(${normalizedColor}, 0.25)`,
    `0 8px 20px rgba(${normalizedColor}, 0.25)`,
  ];

  return level ? all[level] : all;
}

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

export { elevations, elevate };
