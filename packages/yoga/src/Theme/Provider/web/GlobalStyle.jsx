import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({
    theme: {
      yoga: { baseFontFamily },
    },
  }) => `
    @import url(https://fonts.googleapis.com/css?family=${baseFontFamily}:400,600,700,400i,600i,700i&display=swap);
    body {
      font-family: ${baseFontFamily};
    }
  `}
`;

export default GlobalStyle;
