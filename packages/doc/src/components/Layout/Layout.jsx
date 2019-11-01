import React, { useState } from 'react';
import { arrayOf, object, shape } from 'prop-types';

import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';

import { ThemeProvider, themes } from '@gympass/yoga';
import tokens from '@gympass/yoga-tokens';

import { Navigation, Documentation, Header } from '..';

const { colors } = tokens;

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }

  code {
    color: ${colors.madrid[3]};
    font-family: monospace;
    font-size: 14px;
  }

  html, body  {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Muli';
    color: #666;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    margin: 45px 0 20px;
    color: #333;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;
  }

  a {
    color: ${colors.madrid[3]};
    text-decoration: none;
  }

  h1 {
    font-size: 48px;
    margin: 0;
    font-weight: 300;

    + p {
      color: #6b6b78;
      font-size: 18px;
      margin: 10px 0 50px;
      font-weight: 300;
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
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Header Header Header'
    'Navigation Documentation Summary';
  background-color: ${colors.gray[1]};
`;

const Layout = ({
  data: {
    siteMetadata: { title, favicon },
  },
  nav,
  doc: { body, frontmatter },
}) => {
  const { metaTitle, metaDescription } = frontmatter;

  const allThemes = Object.keys(themes);
  const allLocales = Object.keys(tokens);

  const [theme, setTheme] = useState(allThemes.find(tm => tm === 'default'));
  const [locale, setLocale] = useState(allLocales.find(lc => lc === 'default'));

  return (
    <ThemeProvider theme={theme} locale={locale}>
      <Helmet>
        <script async src="https://snack.expo.io/embed.js" />
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
      </Grid>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  nav: arrayOf(object).isRequired,
  doc: shape({}).isRequired,
};

export default Layout;
