import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const Step = props => <Wrapper {...props} />;

Step.displayName = 'Stepper.Step';

Step.propTypes = {
  /** Label to be displayed below the stepper dot. */
  label: string.isRequired,
};

export default Step;
