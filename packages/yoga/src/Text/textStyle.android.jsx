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
          fontWeights,
          components: {
            text: {
              [type]: { fontFamily, fontWeight },
            },
          },
        },
      },
    }) => {
      // Defaults to System Font if `fontFamily` is not loaded.
      let finalFontFamily;

      if (fontFamily) {
        finalFontFamily = `${fontFamily}-${fontWeight}`;
      } else {
        finalFontFamily =
          fontWeight === 400
            ? baseFont.family
            : `${baseFont.family}-${fontWeight}`;
      }

      return css`
        font-family: '${finalFontFamily}';

        ${light ? `font-family: ${baseFont.family}-${fontWeights.light};` : ''}
        ${bold ? `font-family: ${baseFont.family}-${fontWeights.bold};` : ''}
      `;
    }}
  `;

export default textStyle;
