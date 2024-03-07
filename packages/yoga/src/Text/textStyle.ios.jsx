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
      const finalFontFamily = fontFamily || baseFont.family;

      return css`
        font-family: ${finalFontFamily};
        ${fontWeight ? `font-weight: ${fontWeight};` : ''}
        ${light ? `font-weight: ${fontWeights.light};` : ''}
        ${bold ? `font-weight: ${fontWeights.bold};` : ''}
      `;
    }}
  `;

export default textStyle;
