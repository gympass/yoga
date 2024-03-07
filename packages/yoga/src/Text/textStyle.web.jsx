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
          fontWeights,

          components: {
            text: {
              [type]: { fontFamily, fontWeight },
            },
          },
        },
      },
    }) => {
      return css`
        ${numberOfLines
          ? `
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${numberOfLines};
            overflow: hidden;
          `
          : ''}

        font-family: ${fontFamily ? `${fontFamily}, ` : ''}${baseFont.family};
        ${fontWeight ? `font-weight: ${fontWeight};` : ''}
        ${light ? `font-weight: ${fontWeights.light};` : ''}
        ${bold ? `font-weight: ${fontWeights.bold};` : ''}
      `;
    }}
  `;

export default textStyle;
