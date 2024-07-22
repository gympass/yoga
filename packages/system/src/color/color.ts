import { getColor, generator } from '../theme';
import { GeneratorProps } from '../types';

const backgroundColor = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['backgroundColor', 'bg', 'bgColor'],
    cssProperty: 'backgroundColor',
    getter: getColor,
  });

export { backgroundColor };
