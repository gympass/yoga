import { css } from 'styled-components';
import defaultStyle from './sharedTextStyle';

const textStyle = (type) => () =>
  css`
    ${defaultStyle(type)};
  `;

export default textStyle;
