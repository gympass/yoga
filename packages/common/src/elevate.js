import hexToRgb from './hexToRgb';

// values from
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_elevation-theme.scss
const UMBRA_OPACITY = 0.2;
const PEUMBRA_OPACITY = 0.14;
const AMBIENT_OPACITY = 0.12;

const umbra = ['0px 2px 4px -1px', '0px 5px 5px -3px', '0px 7px 8px -4px'];
const penumbra = ['0px 4px 5px 0px', '0px 8px 10px 1px', '0px 12px 17px 2px'];
const ambient = ['0px 1px 10px 0px', '0px 3px 14px 2px', '0px 5px 22px 4px'];

function createShadow(level, color) {
  const shadows = [
    `${umbra[level]} ${hexToRgb(color, UMBRA_OPACITY)}`,
    `${penumbra[level]} ${hexToRgb(color, PEUMBRA_OPACITY)}`,
    `${ambient[level]} ${hexToRgb(color, AMBIENT_OPACITY)}`,
  ];

  return shadows.join();
}

/**
 * Elevation function
 *
 * @param {String} color - Color to elevate
 * @param {Number} level - Elevation level. It must be between 0 and 4
 * @returns {String}
 */
function elevate(color = '#000', level) {
  const all = [
    'none',
    createShadow(0, color),
    createShadow(1, color),
    createShadow(2, color),
  ];

  return level ? all[level] : all;
}

export default elevate;
