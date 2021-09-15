import React from 'react';
import Box from '../../Box';
import Icon from '../../Icon';

const TinyTextIcon = props => (
  <Box height="xsmall" width="xsmall">
    <Icon {...props} size="xsmall" style={{ marginTop: 2 }} />
  </Box>
);

TinyTextIcon.propTypes = Icon.propTypes;

export default TinyTextIcon;
