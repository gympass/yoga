import React from 'react';
import { elementType } from 'prop-types';

import GympassLogo from './GympassLogo';

const Logo = ({ customLogo: CustomLogo = null }) =>
  CustomLogo ? <CustomLogo /> : <GympassLogo />;

Logo.propTypes = {
  customLogo: elementType,
};

export default Logo;
