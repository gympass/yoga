import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled from 'styled-components';

import activeDot from '../activeDot';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DotWrapper = styled.View`
  width: 15px;
`;

const Dot = styled.View(
  ({
    active,
    theme: {
      components: { stepper },
    },
  }) => `
    width: 15px;
    height: 15px;

    margin-top: -6px;

    border-radius: ${stepper.dot.radius}px;
    background-color: ${
      active
        ? stepper.dot.backgroundColor.active
        : stepper.dot.backgroundColor.inactive
    };
  `,
);

const Label = styled.Text(
  ({
    active,
    theme: {
      components: { stepper },
    },
  }) => `
    width: 95px;
    margin-top: 10px;
    margin-left: -40px;

    color: ${
      active ? stepper.label.color.active : stepper.label.color.inactive
    };

    font-size: ${stepper.label.font.size}px;
    font-weight: ${stepper.label.font.weight};
    text-align: center;
  `,
);

const Dots = ({ activeStep, labels }) => (
  <Wrapper>
    {labels.map((label, index) => (
      <DotWrapper key={label}>
        <Dot active={activeDot(index, activeStep)} />
        <Label active={activeDot(index, activeStep)}>{label}</Label>
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
