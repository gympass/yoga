import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navigation, Doc } from '../';

const Grid = styled.div``;

const Layout = ({ children }) => (
  <Grid>
    <Navigation></Navigation>
    <Doc>{children}</Doc>
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
