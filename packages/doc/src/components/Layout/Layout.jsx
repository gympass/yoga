import React, { useState } from 'react';
import { arrayOf, object, shape } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@gympass/yoga';
import { hexToRgb } from '@gympass/yoga-common';
import { Navigation, Documentation, Header, ThemeConfig } from '..';
import Github from '../../images/github-logo.svg';

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }

  html, body  {
    color: #666;
    font-family: 'Muli';
    height: 100%;
    margin: 0;
    padding: 0;
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
      font-size: 18px;
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
`;

const MainWrapper = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { primary: primaryPallete },
      },
    },
  }) => `
    code {
      color: ${primaryPallete[3]};
      font-family: monospace;
      font-size: 14px;
    }

    a[target] {
      color: ${primaryPallete[3]};
      text-decoration: none;
    }
  `}
`;

const Grid = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    background-color: ${hexToRgb(grayPallete[1], 0.7)};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
    'Header Header Header'
    'Navigation Documentation Summary';
  `};
`;

const GithubLink = styled.a`
  margin-left: 15px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const GithubLogo = styled(Github)`
  width: 22px;
  height: 22px;
`;

const Layout = ({
  data: {
    siteMetadata: { title },
  },
  nav,
  doc: { body, frontmatter },
}) => {
  const { metaTitle, metaDescription } = frontmatter;
  const [theme, setTheme] = useState();
  const [locale, setLocale] = useState();

  return (
    <ThemeProvider theme={theme} locale={locale}>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        {metaTitle ? (
          <title>Yoga - {metaTitle}</title>
        ) : (
          <title>Yoga - {title}</title>
        )}
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
        <script async src="https://snack.expo.io/embed.js" />
      </Helmet>
      <GlobalStyle />

      <MainWrapper>
        <Grid>
          <Header>
            <ThemeConfig
              theme={theme}
              locale={locale}
              setTheme={setTheme}
              setLocale={setLocale}
            />
            <GithubLink
              href="https://github.com/gympass/yoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo />
            </GithubLink>
          </Header>

          <Navigation items={nav} />
          <Documentation mdx={body} />
        </Grid>
      </MainWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  nav: arrayOf(object).isRequired,
  doc: shape({}).isRequired,
  data: shape({}).isRequired,
};

export default Layout;
