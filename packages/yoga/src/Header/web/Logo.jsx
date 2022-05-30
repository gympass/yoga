import React from 'react';
import { func } from 'prop-types';

import GympassLogo from './GympassLogo';

const Logo = ({ customLogo: CustomLogo }) =>
  !CustomLogo ? <GympassLogo /> : <CustomLogo />;

Logo.propTypes = {
  customLogo: func,
};

Logo.defaultProps = {
  customLogo: null,
};

export default Logo;
