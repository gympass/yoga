import { css } from 'styled-components';

const textStyle = type => () => css`
  ${({
    variant,
    inverted,
    theme: {
      yoga: {
        baseFont,
        colors: { [variant]: color = {}, dark, white },
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

    font-family: ${baseFont.family}${
    fontWeight !== 400 ? `-${fontWeight}` : ''
  };
    color: ${variant ? color[3] : dark};
    ${inverted ? `color: ${white};` : ''}
  `}
`;

export default textStyle;
