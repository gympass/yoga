import React from 'react';
import Box from '../../Box';

const Header = props => (
  <Box as="header" width="100%" color="text.primary" {...props} />
);

Header.displayName = 'Drawer.Header';

export default Header;
