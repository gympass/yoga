import React from 'react';
import Box from '../../Box';

const Content = props => (
  <Box
    ta="center"
    color="text.secondary"
    fw="regular"
    fs="medium"
    mb="xlarge"
    {...props}
  />
);

Content.displayName = 'Dialog.Content';

export default Content;
