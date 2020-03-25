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
    }
  `}
`;

export default GlobalStyle;
