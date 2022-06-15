import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

const textStyle = type => () =>
  css`
    ${defaultStyle(type)};
    ${({ numberOfLines }) => `
    ${
      numberOfLines
        ? `
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${numberOfLines};
        overflow: hidden;
      `
        : ''
    }
  `}
  `;

export default textStyle;
