import { toPx } from './unit';
import { getFontSize, getFontWeight, getColor, generator } from './theme';

const color = props =>
  generator({
    props,
    prop: ['color', 'c'],
    cssProperty: 'color',
    getter: getColor,
  });

const fontSize = props =>
  generator({
    props,
    prop: ['fontSize', 'fs'],
    cssProperty: 'font-size',
    getter: getFontSize,
    transform: toPx,
  });

const fontWeight = props =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-weight',
    getter: getFontWeight,
    transform: value => value && value.toString(),
  });

export { fontSize, fontWeight, color };
