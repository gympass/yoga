import { getFontWeight, generator } from '../theme';
import { SystemValues } from '../types';

export const fontWeight = (props: SystemValues) =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-family',
    getter: getFontWeight,
    transform: value => {
      if (!value || !props.theme) {
        return undefined;
      }

      const {
        theme: {
          yoga: { baseFont },
        },
      } = props;

      if (Number(value) === 400) {
        return baseFont.family;
      }

      return `${baseFont.family}-${value}`;
    },
  });
