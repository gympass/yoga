import React from 'react';
import { func, string } from 'prop-types';
import Icon from '../../Icon';

const Placeholder = ({ fill, icon }) => {
  return <Icon as={icon} width="50%" height="50%" fill={fill} />;
};

Placeholder.propTypes = {
  icon: func.isRequired,
  fill: string,
};

Placeholder.defaultProps = {
  fill: 'white',
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
