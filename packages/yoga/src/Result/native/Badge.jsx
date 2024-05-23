import React from 'react';

import { string, node } from 'prop-types';

import Box from '../../Box';
import Icon from '../../Icon';

const BADGE_SIZE = 10.67;

const Badge = ({ icon, fill, ...props }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    borderRadius="circle"
    w="small"
    h="small"
    {...props}
  >
    <Icon as={icon} size={BADGE_SIZE} fill={fill} />
  </Box>
);

Badge.propTypes = {
  icon: node.isRequired,
  fill: string.isRequired,
};

export default Badge;
