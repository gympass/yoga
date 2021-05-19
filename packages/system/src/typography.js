import { toPx } from './unit';
import { getFontSize, generator } from './theme';

const fontSize = props =>
  generator({
    props,
    prop: ['fontSize', 'fs'],
    cssProperty: 'font-size',
    getter: getFontSize,
    transform: toPx,
  });

export { fontSize };
