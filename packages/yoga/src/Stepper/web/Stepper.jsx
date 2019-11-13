import React from 'react';
import { node, number } from 'prop-types';
import styled from 'styled-components';

import Dot from './Dot';

const Line = styled.div(
  ({
    activeStep,
    totalSteps,
    theme: {
      components: { stepper },
    },
  }) => `
  width: 100%;
  height: 4px;
  background-color: ${stepper.line.backgroundColor.inactive};

  &:after {
    background-color: ${stepper.line.backgroundColor.active};
    content: '';
    display: block;
    width: ${
      activeStep <= 0 ? 0 : ((activeStep - 1) / (totalSteps - 1)) * 100
    }%;
    height: 4px;
  }
`,
);

const Dots = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stepper = ({ children, activeStep }) => {
  const totalSteps = [...Array(children.length).keys()];
  return (
    <>
      <Line totalSteps={totalSteps.length} activeStep={activeStep} />
      <Dots>
        {totalSteps.map((step, index) => (
          <Dot index={index + 1} activeStep={activeStep} key={step}>
            {children[index]}
          </Dot>
        ))}
      </Dots>
    </>
  );
};

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  children: node.isRequired,
  activeStep: number,
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
