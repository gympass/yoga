import { css } from 'styled-components';
import themeReader from '../../Theme/helpers/themeReader';

const toUnit = (unit = 'px') => value =>
  Number(value) && value !== 0 ? `${value}${unit}` : value;
const toPx = toUnit('px');

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

const margin = props =>
  generator({
    props,
    prop: ['margin', 'm'],
    cssProperty: 'margin',
    getter: getSpacing,
    transform: toPx,
  });

const marginTop = props =>
  generator({
    props,
    prop: ['marginTop', 'mt'],
    cssProperty: 'marginTop',
    getter: getSpacing,
    transform: toPx,
  });

const marginRight = props =>
  generator({
    props,
    prop: ['marginRight', 'mr'],
    cssProperty: 'marginRight',
    getter: getSpacing,
    transform: toPx,
  });

const marginBottom = props =>
  generator({
    props,
    prop: ['marginBottom', 'mb'],
    cssProperty: 'marginBottom',
    getter: getSpacing,
    transform: toPx,
  });

const marginLeft = props =>
  generator({
    props,
    prop: ['marginLeft', 'ml'],
    cssProperty: 'marginLeft',
    getter: getSpacing,
    transform: toPx,
  });

const marginHorizontal = props =>
  generator({
    props,
    prop: ['marginHorizontal', 'mx', 'mh'],
    cssProperty: ['marginLeft', 'marginRight'],
    getter: getSpacing,
    transform: toPx,
  });

const marginVertical = props =>
  generator({
    props,
    prop: ['marginVertical', 'my', 'mv'],
    cssProperty: ['marginTop', 'marginBottom'],
    getter: getSpacing,
    transform: toPx,
  });

const padding = props =>
  generator({
    props,
    prop: ['padding', 'p'],
    cssProperty: 'padding',
    getter: getSpacing,
    transform: toPx,
  });

const paddingTop = props =>
  generator({
    props,
    prop: ['paddingTop', 'pt'],
    cssProperty: 'paddingTop',
    getter: getSpacing,
    transform: toPx,
  });

const paddingRight = props =>
  generator({
    props,
    prop: ['paddingRight', 'pr'],
    cssProperty: 'paddingRight',
    getter: getSpacing,
    transform: toPx,
  });

const paddingBottom = props =>
  generator({
    props,
    prop: ['paddingBottom', 'pb'],
    cssProperty: 'paddingBottom',
    getter: getSpacing,
    transform: toPx,
  });

const paddingLeft = props =>
  generator({
    props,
    prop: ['paddingLeft', 'pl'],
    cssProperty: 'paddingLeft',
    getter: getSpacing,
    transform: toPx,
  });

const paddingHorizontal = props =>
  generator({
    props,
    prop: ['paddingHorizontal', 'px', 'ph'],
    cssProperty: ['paddingLeft', 'paddingRight'],
    getter: getSpacing,
    transform: toPx,
  });

const paddingVertical = props =>
  generator({
    props,
    prop: ['paddingVertical', 'py', 'pv'],
    cssProperty: ['paddingTop', 'paddingBottom'],
    getter: getSpacing,
    transform: toPx,
  });

const compose = (...functions) => args =>
  functions
    .map(fn => fn(args))
    .flat()
    .filter(Boolean);

const spacing = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
);

export {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  spacing,
};
