import { toPx } from '../unit';
import { compose, generator, getSpacing } from '../theme';
import { SystemValues } from '../types';

const display = (props: SystemValues) =>
  generator({
    props,
    prop: ['display', 'd'],
    cssProperty: 'display',
  });

const position = (props: SystemValues) =>
  generator({
    props,
    prop: ['position'],
    cssProperty: 'position',
  });

const top = (props: SystemValues) =>
  generator({
    props,
    prop: ['top'],
    cssProperty: 'top',
    getter: getSpacing,
    transform: toPx,
  });

const right = (props: SystemValues) =>
  generator({
    props,
    prop: ['right'],
    cssProperty: 'right',
    getter: getSpacing,
    transform: toPx,
  });

const bottom = (props: SystemValues) =>
  generator({
    props,
    prop: ['bottom'],
    cssProperty: 'bottom',
    getter: getSpacing,
    transform: toPx,
  });

const left = (props: SystemValues) =>
  generator({
    props,
    prop: ['left'],
    cssProperty: 'left',
    getter: getSpacing,
    transform: toPx,
  });

const zIndex = (props: SystemValues) =>
  generator({
    props,
    prop: ['zIndex'],
    cssProperty: 'zIndex',
  });

const positions = compose(position, top, right, bottom, left, zIndex);

export { display, positions, position, top, right, bottom, left, zIndex };
