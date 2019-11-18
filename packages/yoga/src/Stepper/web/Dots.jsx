import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled from 'styled-components';

const Dot = styled.div(
  ({
    theme: {
      components: { stepper },
    },
  }) => `
  width: 15px;
  height: 15px;

  border-radius: ${stepper.dot.radius}px;
`,
);

const Label = styled.span(
  ({
    theme: {
      components: { stepper },
    },
  }) => `
  width: 95px;

  font-size: ${stepper.label.font.size}px;
  font-weight: ${stepper.label.font.weight};

  transform: translateX(-50%);
`,
);

const DotWrapper = styled.div(
  ({
    index,
    activeStep,
    theme: {
      components: { stepper },
    },
  }) => {
    const active = typeof activeStep !== 'number' ? false : index <= activeStep;

    return `
      width: 15px;
      
      position: relative;

      text-align: center;

      ${Label} {
        color: ${
          active ? stepper.label.color.active : stepper.label.color.inactive
        };
        position: absolute;
        left: 50%;
        top: 10px;
      }

      ${Dot} {
        background-color: ${
          active
            ? stepper.dot.backgroundColor.active
            : stepper.dot.backgroundColor.inactive
        };
        position: absolute;
        top: -10px;
      }
    `;
  },
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dots = ({ activeStep, labels }) => (
  <Wrapper>
    {labels.map((label, index) => (
      <DotWrapper index={index} activeStep={activeStep} key={label}>
        <Dot />
        <Label>{label}</Label>
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
