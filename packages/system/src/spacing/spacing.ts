import { toPx } from '../unit';
import { getSpacing, generator, compose } from '../theme';
import { GeneratorProps } from '../types';

const margin = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['margin', 'm'],
    cssProperty: 'margin',
    getter: getSpacing,
    transform: toPx,
  });

const marginTop = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginTop', 'mt'],
    cssProperty: 'marginTop',
    getter: getSpacing,
    transform: toPx,
  });

const marginRight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginRight', 'mr'],
    cssProperty: 'marginRight',
    getter: getSpacing,
    transform: toPx,
  });

const marginBottom = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginBottom', 'mb'],
    cssProperty: 'marginBottom',
    getter: getSpacing,
    transform: toPx,
  });

const marginLeft = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginLeft', 'ml'],
    cssProperty: 'marginLeft',
    getter: getSpacing,
    transform: toPx,
  });

const marginHorizontal = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginHorizontal', 'mx', 'mh'],
    cssProperty: ['marginLeft', 'marginRight'],
    getter: getSpacing,
    transform: toPx,
  });

const marginVertical = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['marginVertical', 'my', 'mv'],
    cssProperty: ['marginTop', 'marginBottom'],
    getter: getSpacing,
    transform: toPx,
  });

const padding = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['padding', 'p'],
    cssProperty: 'padding',
    getter: getSpacing,
    transform: toPx,
  });

const paddingTop = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingTop', 'pt'],
    cssProperty: 'paddingTop',
    getter: getSpacing,
    transform: toPx,
  });

const paddingRight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingRight', 'pr'],
    cssProperty: 'paddingRight',
    getter: getSpacing,
    transform: toPx,
  });

const paddingBottom = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingBottom', 'pb'],
    cssProperty: 'paddingBottom',
    getter: getSpacing,
    transform: toPx,
  });

const paddingLeft = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingLeft', 'pl'],
    cssProperty: 'paddingLeft',
    getter: getSpacing,
    transform: toPx,
  });

const paddingHorizontal = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingHorizontal', 'px', 'ph'],
    cssProperty: ['paddingLeft', 'paddingRight'],
    getter: getSpacing,
    transform: toPx,
  });

const paddingVertical = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['paddingVertical', 'py', 'pv'],
    cssProperty: ['paddingTop', 'paddingBottom'],
    getter: getSpacing,
    transform: toPx,
  });

const width = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['width', 'w'],
    cssProperty: 'width',
    getter: getSpacing,
    transform: toPx,
  });

const maxWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['maxWidth', 'maxW'],
    cssProperty: 'max-width',
    getter: getSpacing,
    transform: toPx,
  });

const minWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['minWidth', 'minW'],
    cssProperty: 'min-width',
    getter: getSpacing,
    transform: toPx,
  });

const height = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['height', 'h'],
    cssProperty: 'height',
    getter: getSpacing,
    transform: toPx,
  });

const maxHeight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['maxHeight', 'maxH'],
    cssProperty: 'max-height',
    getter: getSpacing,
    transform: toPx,
  });

const minHeight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['minHeight', 'minH'],
    cssProperty: 'min-height',
    getter: getSpacing,
    transform: toPx,
  });

const margins = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
);

const paddings = compose(
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
);

const widths = compose(width, maxWidth, minWidth);

const heights = compose(height, maxHeight, minHeight);

const spacing = compose(margins, paddings, widths, heights);

export {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginHorizontal,
  marginVertical,
  margins,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  paddings,
  spacing,
  width,
  maxWidth,
  minWidth,
  widths,
  height,
  maxHeight,
  minHeight,
  heights,
};
