import React from 'react';
import { bool, number } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View`
  position: relative;
`;

const InactiveLine = styled.View(
  ({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
  width: 100%;
  height: 4px;

  position: absolute;
  top: 0;

  background-color: ${stepper.line.backgroundColor.inactive};
`,
);

const ActiveLine = styled.View(
  ({
    width,
    secondary,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
    position: absolute;
    top: 0;

    background-color: ${
      secondary
        ? stepper.line.backgroundColor.secondary
        : stepper.line.backgroundColor.active
    };
    width: ${width}%;
    height: 4px;
`,
);

const Line = ({ activeStep, totalSteps, secondary }) => {
  return (
    <Wrapper>
      <InactiveLine />
      <ActiveLine
        width={activeStep <= 0 ? 0 : (activeStep / totalSteps) * 100}
        secondary={secondary}
      />
    </Wrapper>
  );
};

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
  secondary: bool,
};

Line.defaultProps = {
  activeStep: 0,
  totalSteps: 0,
  secondary: false,
};

export default Line;
