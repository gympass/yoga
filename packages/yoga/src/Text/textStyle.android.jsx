import { css } from 'styled-components';
import defaultStyle from './textStyle';

const textStyle = type => () => css`
  ${defaultStyle(type)};
  ${({
    light,
    theme: {
      yoga: {
        baseFont,
        fontWeights,
        components: {
          text: {
            [type]: { fontWeight },
          },
        },
      },
    },
  }) => `
    ${fontWeight !== 400 ? `-${fontWeight}` : ''};
    ${light ? `font-family: ${baseFont.family}-${fontWeights.light};` : ''}
  `}
`;

export default textStyle;
