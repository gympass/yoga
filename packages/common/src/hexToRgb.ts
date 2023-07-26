function hexToRgb(hex: string = '', opacity: number = 1): string {
  const h = hex.replace('#', '');

  const shortened = h.length === 3;
  const step = shortened ? 1 : 2;
  const bIndex = shortened ? 2 : 4;

  const parse = (from: number) => {
    return (parseInt(h.slice(from, from + step).repeat(shortened ? 2 : 1), 16));
  }

  const r = parse(0);
  const g = parse(step);
  const b = parse(bIndex);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default hexToRgb;
