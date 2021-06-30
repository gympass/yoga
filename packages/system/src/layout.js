import { toPx } from './unit';
import { compose, generator, getSpacing } from './theme';

const display = props =>
  generator({
    props,
    prop: ['display', 'd'],
    cssProperty: 'display',
  });

const position = props =>
  generator({
    props,
    prop: ['position'],
    cssProperty: 'position',
  });

const top = props =>
  generator({
    props,
    prop: ['top'],
    cssProperty: 'top',
    getter: getSpacing,
    transform: toPx,
  });

const right = props =>
  generator({
    props,
    prop: ['right'],
    cssProperty: 'right',
    getter: getSpacing,
    transform: toPx,
  });

const bottom = props =>
  generator({
    props,
    prop: ['bottom'],
    cssProperty: 'bottom',
    getter: getSpacing,
    transform: toPx,
  });

const left = props =>
  generator({
    props,
    prop: ['left'],
    cssProperty: 'left',
    getter: getSpacing,
    transform: toPx,
  });

const positions = compose(
  position,
  top,
  right,
  bottom,
  left,
);

export { display, positions, position, top, right, bottom, left };
