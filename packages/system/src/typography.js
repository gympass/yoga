import { toPx } from './unit';
import {
  getFontSize,
  getFontWeight,
  getColor,
  getLineHeight,
  generator,
  compose,
} from './theme';

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

const lineHeight = props =>
  generator({
    props,
    prop: ['lineHeight', 'lh'],
    cssProperty: 'line-height',
    getter: getLineHeight,
    transform: toPx,
  });

const typography = compose(
  color,
  fontSize,
  fontWeight,
  lineHeight,
);

export { fontSize, fontWeight, color, lineHeight, typography };
