import { css } from 'styled-components';
import { Platform } from 'react-native';
import defaultStyle from './sharedTextStyle';

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
  font-family: ${
    fontWeight === 400 || Platform.OS === 'ios'
      ? baseFont.family
      : `${baseFont.family}-${fontWeight}`
  };
    
    ${light ? `font-family: ${baseFont.family}-${fontWeights.light};` : ''}
  `}
`;

export default textStyle;
