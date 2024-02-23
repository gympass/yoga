import { css } from 'styled-components';

const textStyle = type => () =>
  css`
    ${({
      light,
      variant,
      inverted,
      fontSize = 'medium',
      size = 'medium',
      theme: {
        yoga: {
          fontWeights,
          fontSizes: { [size || fontSize]: pSize },
          colors: { [variant]: color, text, white },
          components: {
            text: {
              [type]: { fontsize, lineHeight, textTransform, letterSpacing },
            },
          },
        },
      },
    }) => `
    font-size: ${fontsize || pSize}px;
    ${letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ''}
    ${lineHeight ? `line-height: ${lineHeight}px;` : ''}

    ${light ? `font-weight: ${fontWeights.light};` : ''}

    color: ${variant ? color : text.primary};
    ${inverted ? `color: ${white};` : ''}
    ${textTransform ? `text-transform: ${textTransform};` : ''}
  `}
  `;

export default textStyle;
