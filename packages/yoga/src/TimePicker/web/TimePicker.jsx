import React from 'react';
import styled from 'styled-components';

const TimePickerContent = styled.div`
  width: 100%;
  width: 400px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 45px rgba(#000, 0.55);
  transform: translate(-50%, -50%);
`;

const DigitalUpper = styled.div`
  padding: 25px 10px 10px 20px;
  font-size: 2em;
`;

const TimeSpan = styled.span`
  transition: opacity 100ms linear;
`;

const TimePicker = () => {
  return (
    <>
      <TimePickerContent>
        <DigitalUpper>
          <TimeSpan>3</TimeSpan>:<TimeSpan>15</TimeSpan>
        </DigitalUpper>
      </TimePickerContent>
    </>
  );
};

export default TimePicker;
