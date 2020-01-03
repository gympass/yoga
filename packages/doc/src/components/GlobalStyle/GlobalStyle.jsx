import { bool } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ overflow }) => `
    #gatsby-focus-wrapper, #___gatsby {
      height: 100%;
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;

      color: #666;
      font-family: 'neue-haas-grotesk-display';
      letter-spacing: 0.5px;

      overflow: ${overflow ? 'hidden' : 'auto'};
    }

    h1, h2, h3, h4, h5, h6 {
      display: flex;
      align-items: center;
      margin: 45px 0 20px;

      color: #333;
      font-weight: 300;

      &:hover {
        .anchor {
          display: flex;
        }
      }
    }

    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.8;
    }

    .anchor {
      display: none;
      padding-right: 8px;
      margin-left: -24px;
      float: left;
    }

    h1 {
      margin: 0;

      font-size: 48px;
      font-weight: 300;

      + p {
        margin-top: 10px;
        
        color: #6b6b78;
        font-weight: 300;
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

    img { 
      max-width: 100%;
    }
    
    table {
      text-align: left;
      border-collapse: collapse;
      margin: 0px 0;
      width: 100%;

      thead {
        th {
          font-size: 14px;
          font-weight: normal;
          padding: 14px 12px 12px;
          text-align: left;
        }
      }

      tbody tr, thead tr {
        td, th {
          border: 1px solid #ccc;
          padding: 14px 12px 12px;
        }
      }
    }
    
    @media (max-width: 900px) {
      h1 {
        font-size: 26px;
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
