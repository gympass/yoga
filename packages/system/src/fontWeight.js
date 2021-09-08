import { getFontWeight, generator } from './theme';

export const fontWeight = props =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-weight',
    getter: getFontWeight,
    transform: value => value && value.toString(),
  });
