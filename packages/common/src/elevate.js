import hexToRgb from './hexToRgb';

/**
 * Elevation function
 *
 * @param {String} color=#000 - Color to elevate
 * @param {Number} level - Elevation level. It must be between 0 and 4
 * @returns {String}
 */
function elevate(color = '#000', level) {
  const normalizedColor = hexToRgb(color, 0.25);
  const all = [
    'none',
    `0 2px 6px ${normalizedColor}`,
    `0 4px 12px ${normalizedColor}`,
    `0 8px 20px ${normalizedColor}`,
  ];
  return level ? all[level] : all;
}

export default elevate;
