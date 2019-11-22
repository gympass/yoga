import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled from 'styled-components';

import activeDot from '../activeDot';

const Dot = styled.div(
  ({
    theme: {
      yoga: {
        components: { stepper },
      },
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
      yoga: {
        components: { stepper },
      },
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
    active,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
    position: relative;
    width: 15px;

    text-align: center;

    ${Label} {
      position: absolute;
      left: 50%;
      top: 10px;

      color: ${
        active ? stepper.label.color.active : stepper.label.color.inactive
      };
    }

    ${Dot} {
      position: absolute;
      top: -10px;

      background-color: ${
        active
          ? stepper.dot.backgroundColor.active
          : stepper.dot.backgroundColor.inactive
      };
    }
  `,
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dots = ({ activeStep, labels }) => (
  <Wrapper>
    {labels.map((label, index) => (
      <DotWrapper active={activeDot(index, activeStep)} key={label}>
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
