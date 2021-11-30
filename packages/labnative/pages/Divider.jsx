import React from 'react';
import { Divider, Text, Box } from '@gympass/yoga';

const DividerPage = () => (
  <Box
    display="flex"
    flexDirection="column"
    minWidth={300}
    justifyContent="space-between"
  >
    <Text.H4>First Content</Text.H4>
    <Divider />
    <Text.H4>Second Content</Text.H4>
  </Box>
);

export default DividerPage;
