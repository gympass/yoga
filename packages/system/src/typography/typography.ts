import { toPx } from '../unit';
import {
  getFontSize,
  getColor,
  getLineHeight,
  generator,
  compose,
} from '../theme';

import { fontWeight } from '../font-weight';
import { SystemValues } from '../types';

const color = (props: SystemValues) =>
  generator({
    props,
    prop: ['color', 'c'],
    cssProperty: 'color',
    getter: getColor,
  });

const fontSize = (props: SystemValues) =>
  generator({
    props,
    prop: ['fontSize', 'fs'],
    cssProperty: 'font-size',
    getter: getFontSize,
    transform: toPx,
  });

const lineHeight = (props: SystemValues) =>
  generator({
    props,
    prop: ['lineHeight', 'lh'],
    cssProperty: 'line-height',
    getter: getLineHeight,
    transform: toPx,
  });

const textAlign = (props: SystemValues) =>
  generator({
    props,
    prop: ['textAlign', 'ta'],
    cssProperty: 'text-align',
  });

const textTransform = (props: SystemValues) =>
  generator({
    props,
    prop: ['textTransform', 'tt'],
    cssProperty: 'text-transform',
  });

const typography = compose(
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textTransform,
);

export {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textTransform,
  typography,
};
