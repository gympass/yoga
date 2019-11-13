import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
  position: absolute;
  left: 50%;
  top: 20px;

  width: 95px;
  margin: 0 20px;

  font-size: 12px;
  font-weight: 700;

  transform: translateX(calc(-50% - 20px));
`;

const Step = props => <Label {...props} />;

Step.displayName = 'Stepper.Step';

export default Step;
