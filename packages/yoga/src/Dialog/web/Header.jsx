import React from 'react';
import { Card } from '../..';

const Header = props => (
  <Card.Header
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
