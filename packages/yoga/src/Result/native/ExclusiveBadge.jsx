import React from 'react';

import { WellhubIcon } from '@gympass/yoga-icons';

import Box from '../../Box';
import Icon from '../../Icon';

const ExclusiveBadge = () => (
  <Box
    ml="xxxsmall"
    bg="neon"
    justifyContent="center"
    alignItems="center"
    borderRadius="circle"
    w="small"
    h="small"
  >
    <Icon as={WellhubIcon} size={10.67} fill="text.primary" />
  </Box>
);

export default ExclusiveBadge;
