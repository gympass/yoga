import { bool } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ overflow }) => `
    #gatsby-focus-wrapper, #___gatsby {
      height: 100%;
    }

    html, body {
      color: #666;
      font-family: 'neue-haas-grotesk-display';
      letter-spacing: 0.5px;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: ${overflow ? 'hidden' : 'auto'};
    }

    h1, h2, h3, h4, h5, h6 {
      color: #333;
      font-weight: 300;
      margin: 45px 0 20px;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.8;
    }

    h1 {
      font-size: 48px;
      font-weight: 300;
      margin: 0;

      + p {
        color: #6b6b78;
        font-weight: 300;
        margin: 10px 0 50px;
      }
    }

    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 20px;
    }

    * {
      box-sizing: border-box;
    }

    ul {
      line-height: 2;
    }

    @media (max-width: 900px) {
      h1 {
        font-size: 26px;

        + p {
          margin-bottom: 30px;
        }
      }

      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  `,
);

GlobalStyle.propTypes = {
  overflow: bool,
};

GlobalStyle.defaultProps = {
  overflow: false,
};

export default GlobalStyle;
