import { css } from 'styled-components';

const textStyle = type => () => css`
  ${({
    variant,
    inverted,
    theme: {
      yoga: {
        baseFont,
        colors: { [variant]: color, text, white },
        components: {
          text: {
            [type]: { fontsize, lineHeight, fontWeight },
          },
        },
      },
    },
  }) => `
    ${fontsize ? `font-size: ${fontsize}px` : ''};
    ${lineHeight ? `line-height: ${lineHeight}px` : ''};
    ${fontWeight ? `font-weight: ${fontWeight}` : ''};

    font-family: ${baseFont.family};
    color: ${variant ? color : text.primary};
    ${inverted ? `color: ${white};` : ''}
  `}
`;

export default textStyle;
