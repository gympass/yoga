import { getFontWeight, generator } from './theme';

export const fontWeight = props =>
  generator({
    props,
    prop: ['fontWeight', 'fw'],
    cssProperty: 'font-family',
    getter: getFontWeight,
    transform: value => {
      if (!value) {
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
