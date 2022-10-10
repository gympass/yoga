export function hexToRgb(hex = '', opacity = 1) {
  const hexColor = hex.replace('#', '');

  const shortened = hexColor.length === 3;
  const step = shortened ? 1 : 2;
  const bIndex = shortened ? 2 : 4;

  const parse = from =>
    parseInt(hexColor.slice(from, from + step).repeat(shortened ? 2 : 1), 16);

  return `rgba(${parse(0)}, ${parse(step)}, ${parse(bIndex)}, ${opacity})`;
}
