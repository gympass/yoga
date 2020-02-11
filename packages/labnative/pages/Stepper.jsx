import React from 'react';
import styled from 'styled-components';
import { Stepper } from '@gympass/yoga';

import { DocTitle } from '../components';

const StepWrapper = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
`;

const StyledView = styled.View`
  width: 100%;
  padding: 10px;
`;

const StepperPage = () => (
  <StyledView>
    <Stepper activeStep={0}>
      <Stepper.Step label="Confirm Booking">
        <StepWrapper>
          <DocTitle>Confirm Booking Content</DocTitle>
        </StepWrapper>
      </Stepper.Step>
      <Stepper.Step label="Class Booked">
        <StepWrapper>
          <DocTitle>Class Booked Content</DocTitle>
        </StepWrapper>
      </Stepper.Step>
      <Stepper.Step label="Check-in">
        <StepWrapper>
          <DocTitle>Check-in Content</DocTitle>
        </StepWrapper>
      </Stepper.Step>
    </Stepper>
  </StyledView>
);

export default StepperPage;
