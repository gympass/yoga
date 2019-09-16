function hexToRgba(hex) {
  const h = hex.replace('#', '');

  const shortened = h.length === 3;
  const step = shortened ? 1 : 2;
  const bIndex = shortened ? 2 : 4;

  const parse = from =>
    parseInt(h.slice(from, from + step).repeat(shortened ? 2 : 1), 16);

  return `${parse(0)}, ${parse(step)}, ${parse(bIndex)}`;
}

function elevate(color = '#000', level) {
  const normalizedColor = hexToRgba(color);

  const all = [
    `0px 0px 8px rgba(${normalizedColor}, 0.60), 0px 2px 8px rgba(${normalizedColor}, 0.60)`,
    `0px 4px 16px rgba(${normalizedColor}, 0.60), 0px 0px 16px rgba(${normalizedColor}, 0.60)`,
    `0px 6px 24px rgba(${normalizedColor}, 0.60), 0px 0px 24px rgba(${normalizedColor}, 0.60)`,
    `0px 8px 32px rgba(${normalizedColor}, 0.60), 0px 0px 32px rgba(${normalizedColor}, 0.60)`,
  ];

  return level ? all[level + 1] : all;
}

const defaultElevation = elevate();

elevation.level1 = defaultElevation[0];
elevation.level2 = defaultElevation[1];
elevation.level3 = defaultElevation[2];
elevation.level4 = defaultElevation[3];

elevation = elevate;

export default elevation;
