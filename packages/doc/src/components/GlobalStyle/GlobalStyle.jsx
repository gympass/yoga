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

    .anchor {
      display: none;
      padding-right: 8px;
      margin-left: -24px;
      float: left;
    }

    * {
      box-sizing: border-box;
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
  `,
);

GlobalStyle.propTypes = {
  overflow: bool,
};

GlobalStyle.defaultProps = {
  overflow: false,
};

export default GlobalStyle;
