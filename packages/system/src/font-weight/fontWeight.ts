import { getFontWeight, generator } from '../theme';
import { GeneratorProps } from '../types';

export const fontWeight = (props: GeneratorProps['props']) =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-weight',
    getter: getFontWeight,
    transform: value => value?.toString(),
  });
