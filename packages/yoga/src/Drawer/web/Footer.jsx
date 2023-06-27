import React from 'react';

import Box from '../../Box';

function Footer(props) {
  return (
    <Box
      as="footer"
      width="100%"
      d="flex"
      paddingTop="small"
      paddingRight="small"
      paddingBottom="xxlarge"
      paddingLeft="xxlarge"
      {...props}
    />
  );
}

Footer.displayName = 'Drawer.Footer';

export default Footer;
