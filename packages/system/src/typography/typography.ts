import { toPx } from '../unit';
import {
  getFontSize,
  getColor,
  getLineHeight,
  generator,
  compose,
} from '../theme';

import { fontWeight } from '../font-weight';
import { GeneratorProps } from '../types';

const color = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['color', 'c'],
    cssProperty: 'color',
    getter: getColor,
  });

const fontSize = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['fontSize', 'fs'],
    cssProperty: 'font-size',
    getter: getFontSize,
    transform: toPx,
  });

const lineHeight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['lineHeight', 'lh'],
    cssProperty: 'line-height',
    getter: getLineHeight,
    transform: toPx,
  });

const textAlign = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['textAlign', 'ta'],
    cssProperty: 'text-align',
  });

const textTransform = (props: GeneratorProps['props']) =>
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
