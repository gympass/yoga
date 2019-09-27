import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from '@gympass/design-system';

import { Navigation, Doc } from '../';

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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Navigation Doc';
  height: 100%;
`;

const Layout = ({ nav, doc }) => {
  const [theme, setTheme] = useState('endUser');
  const [locale, setLocale] = useState('pt-BR');

  return (
    <>
      <ThemeProvider theme={theme} locale={locale}>
        <button onClick={() => setTheme(theme === 'corp' ? 'endUser' : 'corp')}>
          Change Theme - {theme}
        </button>
        <button onClick={() => setLocale(locale === 'znCn' ? 'pr-BR' : 'znCn')}>
          Change Locale - {locale}
        </button>
        <GlobalStyle />
        <Grid>
          <Navigation items={nav} />
          <Doc mdx={doc} />
        </Grid>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
