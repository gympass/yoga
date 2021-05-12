import { toPx } from './unit';
import {
  getBorder,
  getColor,
  getBorderRadius,
  generator,
  compose,
} from './theme';

const transform = value =>
  Number(value) && value !== 0 ? `${toPx(value)} solid` : value;

const border = props =>
  generator({
    props,
    prop: ['border', 'b'],
    cssProperty: 'border',
    getter: getBorder,
    transform,
  });

const borderTop = props =>
  generator({
    props,
    prop: ['borderTop', 'bt'],
    cssProperty: 'borderTop',
    getter: getBorder,
    transform,
  });

const borderRight = props =>
  generator({
    props,
    prop: ['borderRight', 'br'],
    cssProperty: 'borderRight',
    getter: getBorder,
    transform,
  });

const borderBottom = props =>
  generator({
    props,
    prop: ['borderBottom', 'bb'],
    cssProperty: 'borderBottom',
    getter: getBorder,
    transform,
  });

const borderLeft = props =>
  generator({
    props,
    prop: ['borderLeft', 'bl'],
    cssProperty: 'borderLeft',
    getter: getBorder,
    transform,
  });

const borderColor = props =>
  generator({
    props,
    prop: ['borderColor', 'bc'],
    cssProperty: 'borderColor',
    getter: getColor,
  });

const borderTopColor = props =>
  generator({
    props,
    prop: ['borderTopColor', 'btc'],
    cssProperty: 'borderTopColor',
    getter: getColor,
  });

const borderRightColor = props =>
  generator({
    props,
    prop: ['borderRightColor', 'brc'],
    cssProperty: 'borderRightColor',
    getter: getColor,
  });

const borderBottomColor = props =>
  generator({
    props,
    prop: ['borderBottomColor', 'bbc'],
    cssProperty: 'borderBottomColor',
    getter: getColor,
  });

const borderLeftColor = props =>
  generator({
    props,
    prop: ['borderLeftColor', 'bfc'],
    cssProperty: 'borderLeftColor',
    getter: getColor,
  });

const borderWidth = props =>
  generator({
    props,
    prop: ['borderWidth', 'bw'],
    cssProperty: 'borderWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderTopWidth = props =>
  generator({
    props,
    prop: ['borderTopWidth', 'btw'],
    cssProperty: 'borderTopWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderRightWidth = props =>
  generator({
    props,
    prop: ['borderRightWidth', 'brw'],
    cssProperty: 'borderRightWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderBottomWidth = props =>
  generator({
    props,
    prop: ['borderBottomWidth', 'bbw'],
    cssProperty: 'borderBottomWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderLeftWidth = props =>
  generator({
    props,
    prop: ['borderLeftWidth', 'blw'],
    cssProperty: 'borderLeftWidth',
    getter: getBorder,
    transform: toPx,
  });

const borderRadius = props =>
  generator({
    props,
    prop: ['borderRadius', 'br'],
    cssProperty: 'borderRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderTopLeftRadius = props =>
  generator({
    props,
    prop: ['borderTopLeftRadius', 'btfr'],
    cssProperty: 'borderTopLeftRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderTopRightRadius = props =>
  generator({
    props,
    prop: ['borderTopRightRadius', 'btrr'],
    cssProperty: 'borderTopRightRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderBottomLeftRadius = props =>
  generator({
    props,
    prop: ['borderBottomLeftRadius', 'bbfr'],
    cssProperty: 'borderBottomLeftRadius',
    getter: getBorderRadius,
    transform: toPx,
  });

const borderBottomRightRadius = props =>
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
