import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

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
        font-family: ${fontFamily};
        ${finalFontWeight ? `font-weight: ${finalFontWeight};` : ''}
      `;
    }}
  `;

export default textStyle;
