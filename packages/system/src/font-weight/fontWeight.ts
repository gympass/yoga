import { getFontWeight, generator } from '../theme';
import { SystemValues } from '../types';

export const fontWeight = (props: SystemValues) =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-weight',
    getter: getFontWeight,
    transform: value => value && value.toString(),
  });
