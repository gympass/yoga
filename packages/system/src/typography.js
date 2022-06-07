import { toPx } from './unit';
import {
  getFontSize,
  getColor,
  getLineHeight,
  generator,
  compose,
} from './theme';

import { fontWeight } from './fontWeight';

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

const lineHeight = props =>
  generator({
    props,
    prop: ['lineHeight', 'lh'],
    cssProperty: 'line-height',
    getter: getLineHeight,
    transform: toPx,
  });

const textAlign = props =>
  generator({
    props,
    prop: ['textAlign', 'ta'],
    cssProperty: 'text-align',
  });

const typography = compose(color, fontSize, fontWeight, lineHeight, textAlign);

export { fontSize, fontWeight, color, lineHeight, textAlign, typography };
