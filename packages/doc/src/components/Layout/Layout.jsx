import React from 'react';
import { arrayOf, object, shape } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';

import { Navigation, Documentation, Header, Summary } from '..';

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }

  html, body  {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Open Sans';
    color: #666;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    margin: 45px 0 20px;
    color: #333;
  }

  p {
    margin: 0 0 14px
  }

  a {
    color: #1890ff;
    text-decoration: none;
  }

  h1 {
    font-size: 50px;
    margin: 0;

    + p {
      margin: 10px 0 50px;
      font-style: italic;
    }
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 22px;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 166px;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Header Header Header'
    'Navigation Documentation Summary';
  height: 100%;
`;

const Layout = ({
  data: {
    siteMetadata: { title, favicon },
  },
  nav,
  doc: { body, frontmatter },
}) => {
  const { metaTitle, metaDescription } = frontmatter;
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
        {metaTitle ? <title>{metaTitle}</title> : <title>{title}</title>}
        {metaTitle ? <meta name="title" content={metaTitle} /> : null}
        {metaDescription ? (
          <meta name="description" content={metaDescription} />
        ) : null}
        {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
        {metaDescription ? (
          <meta property="og:description" content={metaDescription} />
        ) : null}
        {metaTitle ? (
          <meta property="twitter:title" content={metaTitle} />
        ) : null}
        {metaDescription ? (
          <meta property="twitter:description" content={metaDescription} />
        ) : null}
      </Helmet>
      <GlobalStyle />
      <Grid>
        <Header />
        <Navigation items={nav} />
        <Documentation mdx={body} />
        <Summary>Alou</Summary>
      </Grid>
    </>
  );
};

Layout.propTypes = {
  nav: arrayOf(object).isRequired,
  doc: shape({}).isRequired,
};

export default Layout;
