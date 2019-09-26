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
    `0 0 8px rgba(${normalizedColor}, 0.60), 0 2px 8px rgba(${normalizedColor}, 0.60)`,
    `0 4px 16px rgba(${normalizedColor}, 0.60), 0 0 16px rgba(${normalizedColor}, 0.60)`,
    `0 6px 24px rgba(${normalizedColor}, 0.60), 0 0 24px rgba(${normalizedColor}, 0.60)`,
    `0 8px 32px rgba(${normalizedColor}, 0.60), 0 0 32px rgba(${normalizedColor}, 0.60)`,
  ];

  return level ? all[level] : all;
}

/**
 * An Elevation
 * @typedef Elevation
 *
 * @type {Object}
 *
 * @property {Object<Number, Number>} level Elevation level (1, 2, 3 and 4)
 */

/**
 * @type Elevation
 */
const elevation = elevate();

const level = {};
[level[1], level[2], level[3], level[4]] = elevation;

elevation.level = level;

export { elevation, elevate };
