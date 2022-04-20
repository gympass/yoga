/* eslint-disable no-underscore-dangle */
const normalizeCSS = (rule) =>
  rule
    .join('\n')
    .replace(/(?:\r\n|\r|\n)/g, '')
    .replace(/ {\s+/g, '{')
    .replace(/\s+ }/g, '}')
    .replace(/,\s+/g, ',')
    .replace(/;\s+/g, ';')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');

const getCSS = (scope) =>
  normalizeCSS(
    Array.from(scope.querySelectorAll('style')).map((tag) => tag.innerHTML),
  );

const expectCSSMatches = (expectation) => {
  const _expectation = normalizeCSS(expectation.split('\n'));
  const css = getCSS(document);

  expect(css).toContain(_expectation);
  return css;
};

export default expectCSSMatches;
