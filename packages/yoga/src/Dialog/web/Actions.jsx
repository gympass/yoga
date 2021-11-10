import React from 'react';

import Box from '../../Box';

const Actions = props => (
  <Box as="footer" d="flex" gap="large" ml="auto" {...props} />
);

Actions.displayName = 'Dialog.Actions';

export default Actions;
