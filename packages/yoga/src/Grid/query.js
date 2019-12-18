import tokens from '@gympass/yoga-tokens';
import { css } from 'styled-components';

const { breakpoints } = tokens;

const query = () =>
  Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...style) => css`
      @media (min-width: ${breakpoints[label].width}px) {
        ${css(...style)};
      }
    `;
    return acc;
  }, {});

export default query;
