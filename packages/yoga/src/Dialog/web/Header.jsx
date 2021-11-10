import React from 'react';
import Box from '../../Box';

const Header = props => (
  <Box
    as="header"
    ta="center"
    color="text.primary"
    fw="medium"
    fs="xlarge"
    mb="large"
    {...props}
  />
);

Header.displayName = 'Dialog.Header';

export default Header;
