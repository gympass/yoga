/**
 * @module elevation
 * @desc Elevation (z-index) tokens module.
 *
 * @memberof @gympass/tokens
 */

function hexToRgb(hex) {
  const h = hex.replace('#', '');

  const shortened = h.length === 3;
  const step = shortened ? 1 : 2;
  const bIndex = shortened ? 2 : 4;

  const parse = from =>
    parseInt(h.slice(from, from + step).repeat(shortened ? 2 : 1), 16);

  return `${parse(0)}, ${parse(step)}, ${parse(bIndex)}`;
}

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
