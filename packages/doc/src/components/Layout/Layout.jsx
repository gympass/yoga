import React, { useState } from 'react';
import { arrayOf, shape, bool } from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@gympass/yoga';
import { hexToRgb } from '@gympass/yoga-common';
import { Link } from 'gatsby';

import {
  GlobalStyle,
  Navigation,
  Documentation,
  Header,
  TabBar,
} from 'components';
import ReactLogo from 'images/react-logo.svg';
import BookLogo from 'images/book.svg';
import WrenchIcon from 'images/wrench.svg';

import Footer from './Footer';

const MainWrapper = styled.div`
  height: 100%;
  a[target] {
    text-decoration: none;
  }
`;

const Grid = styled.div`
  ${({
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) => `
    background-color: ${hexToRgb(elements.backgroundAndDisabled, 0.7)};
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
      grid-template-rows: auto 1fr auto;
    }
  `};
`;

const HeaderLink = styled(Link).attrs({
  activeClassName: 'active',
})(
  ({
    theme: {
      yoga: {
        colors: { primary, elements },
      },
    },
  }) =>
    `
    display: flex;
    align-items: center;
    margin-right: 32px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: ${elements.selectionAndIcons};
    height: 100%;

    &.active {
      border-bottom-color: ${primary};
      color: ${primary};
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
  const [showMenu, toggleMenu] = useState(false);

  const prefix =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').filter((item) => item)[0] === 'yoga'
      : false;

  return (
    <ThemeProvider>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="/yoga/favicon.png"
          sizes="32x32"
        />
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
      </Helmet>
      <GlobalStyle overflow={showMenu} />

      <MainWrapper>
        <Grid>
          <Header showMenu={showMenu} toggleMenu={toggleMenu}>
            <HeaderLink to="/guidelines/product-content/introduction">
              Guidelines
            </HeaderLink>
            <HeaderLink to="/components">Components</HeaderLink>
            <HeaderLink to="/system/getting-started">System</HeaderLink>
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
            <TabBar.Tab to="/system/getting-started">
              <WrenchIcon />
              System
            </TabBar.Tab>
          </TabBar>

          <Navigation
            toggleMenu={toggleMenu}
            opened={showMenu}
            items={nav}
            prefix={prefix}
          />
          <Documentation mdx={body} prefix={prefix} />

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

HeaderLink.propTypes = {
  partiallyActive: bool,
};

HeaderLink.defaultProps = {
  partiallyActive: true,
};

Layout.propTypes = {
  nav: arrayOf(shape({})).isRequired,
  doc: shape({}).isRequired,
  data: shape({}).isRequired,
};

export default Layout;
