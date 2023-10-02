const toUnit = (unit = 'px') => {
  return value => (Number(value) && value !== 0 ? `${value}${unit}` : value);
};

const toPx = toUnit('px');

export { toUnit, toPx };
