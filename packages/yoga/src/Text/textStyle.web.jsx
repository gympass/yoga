import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

const textStyle = type => () =>
  css`
    ${defaultStyle(type)};

    ${({
      light,
      bold,
      numberOfLines,
      theme: {
        yoga: {
          baseFont,
          components: { text },
        },
      },
    }) => {
      const themeFontFamily = text[type].fontFamily
        ? `${text[type].fontFamily}, `
        : '';

      let finalFontWeight = text[type].fontWeight;

      if (light && text[`${type}-light`]) {
        finalFontWeight = text[`${type}-light`].fontWeight;
      }
      if (bold && text[`${type}-bold`]) {
        finalFontWeight = text[`${type}-bold`].fontWeight;
      }

      return css`
        ${numberOfLines
          ? `
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${numberOfLines};
            overflow: hidden;
          `
          : ''}

        font-family: ${`${themeFontFamily}${baseFont.family}`};
        ${finalFontWeight ? `font-weight: ${finalFontWeight};` : ''}
      `;
    }}
  `;

export default textStyle;
