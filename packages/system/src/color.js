import { getColor, generator } from './theme';

const backgroundColor = props =>
  generator({
    props,
    prop: ['backgroundColor', 'bg', 'bgColor'],
    cssProperty: 'backgroundColor',
    getter: getColor,
  });

export { backgroundColor };
