import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

const textStyle = type => () =>
  css`
    ${defaultStyle(type)};

    ${({
      numberOfLines,
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
      `;
    }}
  `;

export default textStyle;
