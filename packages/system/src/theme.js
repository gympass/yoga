import { css } from 'styled-components';
import { get } from 'lodash';

const getFromTheme = props => spec => {
  const {
    theme: {
      yoga: { [spec]: matchedSpec },
    },
  } = props;

  return matchedSpec;
};

const getSpacing = props => getFromTheme(props)('spacing');
const getBorder = props => getFromTheme(props)('borders');
const getBorderRadius = props => getFromTheme(props)('radii');
const getColor = props => getFromTheme(props)('colors');
const getFontSize = props => getFromTheme(props)('fontSizes');
const getFontWeight = props => getFromTheme(props)('fontWeights');
const getLineHeight = props => getFromTheme(props)('lineHeights');
const getElevation = props => getFromTheme(props)('elevations');

const generator = ({
  props: componentProps,
  prop,
  cssProperty,
  getter = () => ({}),
  transform = value => value,
}) => {
  const themeProp = getter(componentProps);

  // If prop is an array, ex: ['border', 'b'], we run the generator for each one
  if (Array.isArray(prop)) {
    return prop
      .map(p =>
        generator({
          props: componentProps,
          prop: p,
          cssProperty,
          getter,
          transform,
        }),
      )
      .flat();
  }

  // Getting the desired prop from your component props
  const propFromComponent = componentProps[prop];

  // Getting the value from the theme
  const value = get(themeProp, propFromComponent, propFromComponent);

  const transformedValue = transform(value);

  // If the css is an array, like ['marginLeft', 'marginRight'], we produce
  // an object mapping all of values to its keys
  if (Array.isArray(cssProperty)) {
    const computedCSS = cssProperty.reduce(
      (acc, property) => Object.assign(acc, { [property]: transformedValue }),
      {},
    );

    return css(computedCSS);
  }

  return css({ [cssProperty]: transformedValue });
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
  getFontWeight,
  getLineHeight,
  getElevation,
  generator,
  compose,
};
