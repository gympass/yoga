import { css } from 'styled-components';

const textStyle = type => () =>
  css`
    ${({
      variant,
      inverted,
      fontSize = 'medium',
      size = 'medium',
      theme: {
        yoga: {
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

    color: ${variant ? color : text.primary};
    ${inverted ? `color: ${white};` : ''}
    ${textTransform ? `text-transform: ${textTransform};` : ''}
  `}
  `;

export default textStyle;
