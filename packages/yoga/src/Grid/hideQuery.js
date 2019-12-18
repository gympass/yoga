import { css } from 'styled-components';

const hideQuery = ({
  xxsmall: { width: xxsmallWidth } = {},
  xsmall: { width: xsmallWidth } = {},
  small: { width: smallWidth } = {},
  medium: { width: mediumWidth } = {},
  large: { width: largeWidth } = {},
  xlarge: { width: xlargeWidth } = {},
  xxlarge: { width: xxlargeWidth } = {},
  xxxlarge: { width: xxxlargeWidth } = {},
}) => ({
  xxsmall: css`
    @media (max-width: ${xsmallWidth}px) {
      display: none !important;
    }
  `,
  xsmall: css`
    @media (min-width: ${xsmallWidth}px) and (max-width: ${smallWidth - 1}px) {
      display: none !important;
    }
  `,
  small: css`
    @media (min-width: ${smallWidth}px) and (max-width: ${mediumWidth - 1}px) {
      display: none !important;
    }
  `,
  medium: css`
    @media (min-width: ${mediumWidth}px) and (max-width: ${largeWidth - 1}px) {
      display: none !important;
    }
  `,
  large: css`
    @media (min-width: ${largeWidth}px) and (max-width: ${xlargeWidth - 1}px) {
      display: none !important;
    }
  `,
  xlarge: css`
    @media (min-width: ${xlargeWidth}px) and (max-width: ${xxlargeWidth -
        1}px) {
      display: none !important;
    }
  `,
  xxlarge: css`
    @media (min-width: ${xxlargeWidth}px) and (max-width: ${xxxlargeWidth -
        1}px) {
      display: none !important;
    }
  `,
  xxxlarge: css`
    @media (min-width: ${xxxlargeWidth}px) {
      display: none !important;
    }
  `,
});

export default hideQuery;
