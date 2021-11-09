import React from 'react';
import { Card } from '../..';

const Content = props => (
  <Card.Content
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
