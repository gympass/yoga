import { getColor, generator } from './theme';

const color = props =>
  generator({
    props,
    prop: ['color', 'c'],
    cssProperty: 'color',
    getter: getColor,
  });

const backgroundColor = props =>
  generator({
    props,
    prop: ['backgroundColor', 'bg', 'bgColor'],
    cssProperty: 'backgroundColor',
    getter: getColor,
  });

export { color, backgroundColor };
