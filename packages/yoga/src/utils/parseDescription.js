export function parseDescription(input) {
  return (Array.isArray(input) ? input : [input]).flatMap(item => {
    if (item == null) return [];
    if (typeof item === 'string') {
      const trimmed = item.trim();

      return trimmed ? [trimmed] : [];
    }
    return [item];
  });
}

export default parseDescription;
