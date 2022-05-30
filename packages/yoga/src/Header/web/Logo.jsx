import React from 'react';
import { elementType } from 'prop-types';

import GympassLogo from './GympassLogo';

const Logo = ({ customLogo: CustomLogo }) =>
  !CustomLogo ? <GympassLogo /> : <CustomLogo />;

Logo.propTypes = {
  customLogo: elementType,
};

Logo.defaultProps = {
  customLogo: null,
};

export default Logo;
