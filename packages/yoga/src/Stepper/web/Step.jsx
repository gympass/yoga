import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Step = (props) => <Wrapper {...props} />;

Step.propTypes = {
  /** Label to be displayed below the stepper dot. */
  label: string.isRequired,
};

Step.displayName = 'Stepper.Step';

export default Step;
