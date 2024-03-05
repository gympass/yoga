import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({
    theme: {
      yoga: {
        baseFont: { family },
      },
    },
  }) => `
    body {
      font-family: "${family}";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`;

export default GlobalStyle;
