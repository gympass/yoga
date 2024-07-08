import { toPx } from '../unit';
import { compose, generator, getSpacing } from '../theme';
import { GeneratorProps } from '../types';

const display = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['display', 'd'],
    cssProperty: 'display',
  });

const position = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['position'],
    cssProperty: 'position',
  });

const top = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['top'],
    cssProperty: 'top',
    getter: getSpacing,
    transform: toPx,
  });

const right = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['right'],
    cssProperty: 'right',
    getter: getSpacing,
    transform: toPx,
  });

const bottom = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['bottom'],
    cssProperty: 'bottom',
    getter: getSpacing,
    transform: toPx,
  });

const left = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['left'],
    cssProperty: 'left',
    getter: getSpacing,
    transform: toPx,
  });

const zIndex = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['zIndex'],
    cssProperty: 'zIndex',
  });

const positions = compose(position, top, right, bottom, left, zIndex);

export { display, positions, position, top, right, bottom, left, zIndex };
