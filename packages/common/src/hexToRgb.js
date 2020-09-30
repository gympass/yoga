function hexToRgb(hex = '', opacity = 1) {
  const h = hex.replace('#', '');

  const shortened = h.length === 3;
  const step = shortened ? 1 : 2;
  const bIndex = shortened ? 2 : 4;

  const parse = from =>
    parseInt(h.slice(from, from + step).repeat(shortened ? 2 : 1), 16);

  return `rgba(${parse(0)}, ${parse(step)}, ${parse(bIndex)}, ${opacity})`;
}

export default hexToRgb;
