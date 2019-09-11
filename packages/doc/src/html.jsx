/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */

import React from "react";
import PropTypes from "prop-types";
import config from "../config";

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => (
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {config.siteMetadata.ogImage ? (
        <meta property="og:image" content={config.siteMetadata.ogImage} />
      ) : null}
      <meta property="twitter:card" content="summary_large_image" />
      {config.siteMetadata.ogImage ? (
        <meta property="twitter:image" content={config.siteMetadata.ogImage} />
      ) : null}
      {config.siteMetadata.favicon ? (
        <link
          rel="shortcut icheadComponentson"
          type="image/svg"
          href={config.siteMetadata.favicon}
        />
      ) : null}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossOrigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossOrigin="anonymous"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
              $(this).collapse('hide');
            }
          });
          `
        }}
      />
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.objectOf(PropTypes.any),
  headComponents: PropTypes.arrayOf(PropTypes.any),
  bodyAttributes: PropTypes.objectOf(PropTypes.any),
  preBodyComponents: PropTypes.arrayOf(PropTypes.any),
  postBodyComponents: PropTypes.arrayOf(PropTypes.any),
  body: PropTypes.string
};

HTML.defaultProps = {
  htmlAttributes: {},
  headComponents: [],
  bodyAttributes: {},
  preBodyComponents: [],
  body: "",
  postBodyComponents: []
};

export default HTML;
