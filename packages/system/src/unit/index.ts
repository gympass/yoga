const toUnit = (unit = 'px') =>
  (value: string | number) =>
    Number(value) && value !== 0 ? `${value}${unit}` : value;

const toPx = toUnit('px');

export { toUnit, toPx };
