import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { Stepper } from '@gympass/yoga';

const StyledView = styled.View`
  width: 100%;
  padding: 10px;
`;

const StepperPage = () => {
  return (
    <StyledView>
      <Stepper activeStep={0}>
        <Stepper.Step label="Confirm Booking">
          <Text>Confirm Booking Content</Text>
        </Stepper.Step>
        <Stepper.Step label="Class Booked">
          <Text>Class Booked Content</Text>
        </Stepper.Step>
        <Stepper.Step label="Check-in">
          <Text>Check-in Content</Text>
        </Stepper.Step>
        <Stepper.Step label="Check-in">
          <Text>Check-in Content</Text>
        </Stepper.Step>
      </Stepper>
    </StyledView>
  );
};

export default StepperPage;
