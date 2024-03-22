import React from 'react';
import Text from '../../Text';

const Header = props => (
  <Text.H4 bold as="header" ta="center" mb="large" {...props} />
);

Header.displayName = 'Dialog.Header';

export default Header;
