import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled from 'styled-components';

const Dot = styled.View(
  ({
    index,
    activeStep,
    theme: {
      components: { stepper },
    },
  }) => `
  width: 15px;
  height: 15px;

  margin-top: -6px;

  border-radius: ${stepper.dot.radius}px;

  background-color: ${
    index <= activeStep
      ? stepper.dot.backgroundColor.active
      : stepper.dot.backgroundColor.inactive
  };
`,
);

const Label = styled.Text(
  ({
    index,
    activeStep,
    theme: {
      components: { stepper },
    },
  }) => `
  width: 95px;

  margin-top: 20px;
  margin-left: -40px;

  font-size: ${stepper.label.font.size}px;
  font-weight: ${stepper.label.font.weight};

  color: ${
    index <= activeStep
      ? stepper.label.color.active
      : stepper.label.color.inactive
  };
  text-align: center;
`,
);

const DotWrapper = styled.View`
  width: 15px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Dots = ({ activeStep, labels }) => (
  <Wrapper>
    {labels.map((label, index) => (
      <DotWrapper index={index} activeStep={activeStep} key={label}>
        <Dot index={index} activeStep={activeStep} />
        <Label index={index} activeStep={activeStep}>
          {label}
        </Label>
      </DotWrapper>
    ))}
  </Wrapper>
);

Dots.propTypes = {
  activeStep: number,
  labels: arrayOf(string),
};

Dots.defaultProps = {
  activeStep: 0,
  labels: [],
};

export default Dots;
