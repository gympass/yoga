import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

const formatFontFamily = (fontFamily, fontWeight) => {
  return fontWeight === 400 ? fontFamily : `${fontFamily}-${fontWeight}`;
};

const textStyle = type => () =>
  css`
    ${defaultStyle(type)};
    ${({
      light,
      bold,
      theme: {
        yoga: {
          baseFont,
          components: { text },
        },
      },
    }) => {
      // Defaults to System Font if `fontFamily` is not loaded.
      const fontFamily = text[type].fontFamily || baseFont.family;

      let finalFontWeight = text[type].fontWeight;

      if (light && text[`${type}-light`]) {
        finalFontWeight = text[`${type}-light`].fontWeight;
      }

      if (bold && text[`${type}-bold`]) {
        finalFontWeight = text[`${type}-bold`].fontWeight;
      }

      return css`
        font-family: '${formatFontFamily(fontFamily, finalFontWeight)}';
      `;
    }}
  `;

export default textStyle;
