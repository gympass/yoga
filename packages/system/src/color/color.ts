import { getColor, generator } from '../theme';
import { SystemValues } from '../types';

const backgroundColor = (props: SystemValues) =>
  generator({
    props,
    prop: ['backgroundColor', 'bg', 'bgColor'],
    cssProperty: 'backgroundColor',
    getter: getColor,
  });

export { backgroundColor };
