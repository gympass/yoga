import { css } from 'styled-components';
import { StyleSheet } from 'react-native';
import defaultStyle from './sharedTextStyle';

StyleSheet.create({
  fontFamily: 'NaN Holo Condensed',
});

const textStyle = type => () =>
  css`
    ${defaultStyle(type)};
    ${({
      theme: {
        yoga: {
          baseFont,

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
      `;
    }}
  `;

export default textStyle;
