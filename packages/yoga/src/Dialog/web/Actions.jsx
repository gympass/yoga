import React from 'react';

import { Card } from '../..';

const Actions = props => (
  <Card.Actions d="flex" gap="large" ml="auto" {...props} />
);

Actions.displayName = 'Dialog.Actions';

export default Actions;
