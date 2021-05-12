import { toPx } from './unit';
import { getBorder, generator } from './theme';

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

const borderWidth = props =>
  generator({
    props,
    prop: ['borderWidth', 'bw'],
    cssProperty: 'borderWidth',
    getter: getBorder,
    transform,
  });

export { border, borderWidth };
