import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { Stepper } from '@gympass/yoga';

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
          <Text>Confirm Booking Content</Text>
        </StepWrapper>
      </Stepper.Step>
      <Stepper.Step label="Class Booked">
        <StepWrapper>
          <Text>Class Booked Content</Text>
        </StepWrapper>
      </Stepper.Step>
      <Stepper.Step label="Check-in">
        <StepWrapper>
          <Text>Check-in Content</Text>
        </StepWrapper>
      </Stepper.Step>
    </Stepper>
  </StyledView>
);

export default StepperPage;
