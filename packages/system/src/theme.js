import { css } from 'styled-components';
import { theme as themeReader } from '@gympass/yoga';

const getFromTheme = props => spec => themeReader(props)[spec];
const getSpacing = props => getFromTheme(props)('spacing');

const generator = ({ props, prop, cssProperty, getter, transform }) => {
  const spacing = getter(props);

  if (Array.isArray(prop)) {
    const v = prop
      .map(p => generator({ props, prop: p, cssProperty, getter, transform }))
      .flat();

    return v;
  }

  const p = props[prop];

  const values = transform(spacing[p] || p);

  if (Array.isArray(cssProperty)) {
    const computedCSS = cssProperty.reduce(
      (acc, property) => Object.assign(acc, { [property]: values }),
      {},
    );

    return css(computedCSS);
  }
  return css({ [cssProperty]: values });
};

const compose = (...functions) => args =>
  functions
    .map(fn => fn(args))
    .flat()
    .filter(Boolean);

export { getFromTheme, getSpacing, generator, compose };
