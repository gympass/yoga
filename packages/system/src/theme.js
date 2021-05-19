import { css } from 'styled-components';
import { theme as themeReader } from '@gympass/yoga';

function resolve(obj, path) {
  try {
    return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
  } catch {
    return undefined;
  }
}

const getFromTheme = props => spec => themeReader(props)[spec];

const getSpacing = props => getFromTheme(props)('spacing');
const getBorder = props => getFromTheme(props)('borders');
const getBorderRadius = props => getFromTheme(props)('radii');
const getColor = props => getFromTheme(props)('colors');
const getFontSize = props => getFromTheme(props)('fontSize');

const generator = ({
  props,
  prop,
  cssProperty,
  getter,
  transform = value => value,
}) => {
  const themeProp = getter(props);

  if (Array.isArray(prop)) {
    const v = prop
      .map(p => generator({ props, prop: p, cssProperty, getter, transform }))
      .flat();

    return v;
  }

  const p = props[prop];
  const value = resolve(themeProp, p) || p;

  const values = transform(value);

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

export {
  getFromTheme,
  getSpacing,
  getBorder,
  getColor,
  getBorderRadius,
  getFontSize,
  generator,
  compose,
};
