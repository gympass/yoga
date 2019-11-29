import React, { useState } from 'react';
import { arrayOf, object, shape } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@gympass/yoga';
import { hexToRgb } from '@gympass/yoga-common';
import { Link } from 'gatsby';

import { Navigation, Documentation, Header, ThemeConfig, TabBar } from '..';
import Footer from './Footer';

import ReactLogo from '../../images/react-logo.svg';
import BookLogo from '../../images/book.svg';

const GlobalStyle = createGlobalStyle(
  ({ overflow }) => `
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }

  html, body  {
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

const MainWrapper = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { primary: primaryPallete },
      },
    },
  }) => `
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
    'Navigation Documentation Summary'
    'Footer Footer Footer';

    @media (max-width: 900px) {
      padding-bottom: 64px;
      grid-template-areas:
      'Header'
      'Documentation'
      'Footer';

      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
  `};
`;

const HeaderLink = styled(Link).attrs({
  activeClassName: 'active',
  partiallyActive: true,
})(
  ({
    theme: {
      yoga: {
        colors: { primary, gray },
      },
    },
  }) =>
    `
    display: flex;
    align-items: center;
    margin-right: 32px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: ${gray[3]};
    height: 100%;

    &.active {
      border-bottom-color: ${primary[3]};
      color: ${primary[3]};
    }
  `,
);

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
  const [showMenu, toggleMenu] = useState(false);

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
      <GlobalStyle overflow={showMenu} />

      <MainWrapper>
        <Grid>
          <Header showMenu={showMenu} toggleMenu={toggleMenu}>
            <HeaderLink to="/guidelines">Guidelines</HeaderLink>
            <HeaderLink to="/components">Components</HeaderLink>
            <ThemeConfig
              theme={theme}
              locale={locale}
              setTheme={setTheme}
              setLocale={setLocale}
            />
          </Header>
          <TabBar>
            <TabBar.Tab to="/guidelines">
              <BookLogo />
              Guidelines
            </TabBar.Tab>
            <TabBar.Tab to="/components">
              <ReactLogo />
              Components
            </TabBar.Tab>
          </TabBar>

          <Navigation toggleMenu={toggleMenu} opened={showMenu} items={nav} />
          <Documentation mdx={body} />
          <Footer>
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            by Gympass •{' '}
            <a
              href="https://github.com/gympass/yoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </Footer>
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
