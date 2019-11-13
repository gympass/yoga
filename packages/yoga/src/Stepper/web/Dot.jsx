import React from 'react';
import { number, node } from 'prop-types';
import styled from 'styled-components';
import Step from './Step';

const Circle = styled.div`
  width: 15px;
  height: 15px;
  padding: 5px;
  margin-top: -9px;

  border-radius: 100%;
`;

const Wrapper = styled.div(
  ({
    index,
    activeStep,
    theme: {
      components: { stepper },
    },
  }) => `
  position: relative;

  text-align: center;

  ${Step} {
    color: ${
      index <= activeStep
        ? stepper.label.color.active
        : stepper.label.color.inactive
    };
  }

  ${Circle} {
    background-color: ${
      index <= activeStep
        ? stepper.dot.backgroundColor.active
        : stepper.dot.backgroundColor.inactive
    };
  }
`,
);

const Dot = ({ children, index, activeStep }) => (
  <Wrapper index={index} activeStep={activeStep}>
    <Circle />
    {children}
  </Wrapper>
);

Dot.propTypes = {
  children: node.isRequired,
  index: number,
  activeStep: number,
};

Dot.defaultProps = {
  index: 0,
  activeStep: 0,
};

export default Dot;
