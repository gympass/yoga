import { css } from 'styled-components';

const textStyle = type => () =>
  css`
    ${({
      light,
      variant,
      inverted,
      size = 'medium',
      theme: {
        yoga: {
          baseFont,
          fontWeights,
          fontSizes: { [size]: pSize },
          colors: { [variant]: color, text, white },
          components: {
            text: {
              [type]: {
                fontsize,
                lineHeight,
                fontWeight,
                textTransform,
                letterSpacing,
              },
            },
          },
        },
      },
    }) => `
    font-size: ${fontsize || pSize}px;
    ${letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ''}
    ${lineHeight ? `line-height: ${lineHeight}px;` : ''}
    ${fontWeight ? `font-weight: ${fontWeight};` : ''}
    ${light ? `font-weight: ${fontWeights.light};` : ''}

    font-family: ${baseFont.family};
    color: ${variant ? color : text.primary};
    ${inverted ? `color: ${white};` : ''}
    ${textTransform ? `text-transform: ${textTransform};` : ''}
  `}
  `;

export default textStyle;
