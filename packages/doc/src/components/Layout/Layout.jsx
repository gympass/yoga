import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { Navigation, Doc, Header } from '../';

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
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Header Header'
    'Navigation Documentation';
  height: 100%;
`;

const Layout = ({ nav, doc }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header />
      <Navigation items={nav} />
      <Doc mdx={doc} />
    </Grid>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
