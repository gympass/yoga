import React from 'react';
import Text from '../../Text';

const Header = props => (
  <Text.H4 bold as="h2" ta="center" mb="large" tabIndex={-1} {...props} />
);

Header.displayName = 'Dialog.Header';

export default Header;
