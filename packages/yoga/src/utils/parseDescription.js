export function parseDescription(input) {
  return (Array.isArray(input) ? input : [input]).flatMap(item => {
    if (item == null || typeof item !== 'string') return [];
    const trimmed = item.trim();

    return trimmed ? [trimmed] : [];
  });
}

export default parseDescription;
