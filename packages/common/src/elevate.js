import hexToRgb from './hexToRgb';

// values from
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_elevation-theme.scss
const UMBRA_OPACITY = 0.2;
const PEUMBRA_OPACITY = 0.14;
const AMBIENT_OPACITY = 0.12;

const umbra = ['0 2px 4px -1px', '0 5px 5px -3px', '0 7px 8px -4px'];
const penumbra = ['0 4px 5px 0px', '0 8px 10px 1px', '0 12px 17px 2px'];
const ambient = ['0 1px 10px 0px', '0 3px 14px 2px', '0 5px 22px 4px'];

function sanitizeShadow({ shadow, spread }) {
  if (!spread) {
    const values = shadow.split(' ');

    return [...values.slice(0, values.length - 1)].join(' ');
  }

  return shadow;
}

function createShadow({ level, color, depth, spread }) {
  const shadows = [
    `${sanitizeShadow({ shadow: umbra[level], spread })}
     ${hexToRgb(color, UMBRA_OPACITY)}`,
    `${sanitizeShadow({ shadow: penumbra[level], spread })}
     ${hexToRgb(color, PEUMBRA_OPACITY)}`,
    `${sanitizeShadow({ shadow: ambient[level], spread })}
     ${hexToRgb(color, AMBIENT_OPACITY)}`,
  ];

  return shadows.slice(0, depth).join();
}

function elevate({
  color = '#000',
  level,
  depth = 3,
  spread = true,
  fallback = true,
}) {
  const all = [
    fallback ? '0 0 0 rgba(0, 0, 0, 0)' : 'none',
    createShadow({ level: 0, color, depth, spread }),
    createShadow({ level: 1, color, depth, spread }),
    createShadow({ level: 2, color, depth, spread }),
  ];

  return level ? all[level] : all;
}

export default elevate;
