import { toPx } from '../unit';
import { GeneratorProps } from '../types';
import {
  getBorder,
  getColor,
  getBorderRadius,
  generator,
  compose,
} from '../theme';

const transform = (value: string | number) => {
  if (Number(value) && value !== 0) {
    return `${toPx(value)} solid`;
  }

  if (Number(value) === 0) {
    return 'none';
  }

  return value;
};

const border = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['border', 'b'],
    cssProperty: 'border',
    getter: getBorder,
    transform,
  });

const borderTop = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderTop', 'bt'],
    cssProperty: 'borderTop',
    getter: getBorder,
    transform,
  });

const borderRight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderRight', 'br'],
    cssProperty: 'borderRight',
    getter: getBorder,
    transform,
  });

const borderBottom = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderBottom', 'bb'],
    cssProperty: 'borderBottom',
    getter: getBorder,
    transform,
  });

const borderLeft = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderLeft', 'bl'],
    cssProperty: 'borderLeft',
    getter: getBorder,
    transform,
  });

const borderColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderColor', 'bc'],
    cssProperty: 'borderColor',
    getter: getColor,
  });

const borderTopColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderTopColor', 'btc'],
    cssProperty: 'borderTopColor',
    getter: getColor,
  });

const borderRightColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderRightColor', 'brc'],
    cssProperty: 'borderRightColor',
    getter: getColor,
  });

const borderBottomColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderBottomColor', 'bbc'],
    cssProperty: 'borderBottomColor',
    getter: getColor,
  });

const borderLeftColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderLeftColor', 'blc'],
    cssProperty: 'borderLeftColor',
    getter: getColor,
  });

const borderWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderWidth', 'bw'],
    cssProperty: 'borderWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderTopWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderTopWidth', 'btw'],
    cssProperty: 'borderTopWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderRightWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderRightWidth', 'brw'],
    cssProperty: 'borderRightWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderBottomWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderBottomWidth', 'bbw'],
    cssProperty: 'borderBottomWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderLeftWidth = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderLeftWidth', 'blw'],
    cssProperty: 'borderLeftWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderRadius = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderRadius', 'bRadius'],
    cssProperty: 'borderRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderTopLeftRadius = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderTopLeftRadius', 'btlr'],
    cssProperty: 'borderTopLeftRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderTopRightRadius = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderTopRightRadius', 'btrr'],
    cssProperty: 'borderTopRightRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderBottomLeftRadius = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderBottomLeftRadius', 'bblr'],
    cssProperty: 'borderBottomLeftRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderBottomRightRadius = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['borderBottomRightRadius', 'bbrr'],
    cssProperty: 'borderBottomRightRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
);

export {
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borders,
};
