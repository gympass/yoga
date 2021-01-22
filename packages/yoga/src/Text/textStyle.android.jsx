import { css } from 'styled-components';

const textStyle = type => () => css`
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
            [type]: { fontsize, lineHeight, fontWeight },
          },
        },
      },
    },
  }) => `
    font-size: ${fontsize || pSize}px;
    ${lineHeight ? `line-height: ${lineHeight}px` : ''};

    font-family: ${baseFont.family}${
    fontWeight !== 400 ? `-${fontWeight}` : ''
  };

    ${light ? `font-family: ${baseFont.family}-${fontWeights.light}` : ''};

    color: ${variant ? color : text.primary};
    ${inverted ? `color: ${white};` : ''}
  `}
`;

export default textStyle;
