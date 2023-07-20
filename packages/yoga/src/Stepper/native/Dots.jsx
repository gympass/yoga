import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled from 'styled-components';

import { colors } from '@gympass/yoga-tokens/src/global';
import activeDot from '../activeDot';
import Text from '../../Text';
import { typeOf } from '../../shared';

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
    color,
    theme: {
      yoga: {
        colors: { [color]: customColor },
        components: { stepper },
      },
    },
  }) => `
    width: 15px;
    height: 15px;

    margin-top: -6px;

    border-radius: ${stepper.dot.radius}px;
    background-color: ${
      active
        ? customColor || stepper.dot.backgroundColor.active
        : stepper.dot.backgroundColor.inactive
    };
  `,
);

const Label = styled(Text.Bold)(
  ({
    active,
    color,
    theme: {
      yoga: {
        colors: { [color]: customColor },
        components: { stepper },
      },
    },
  }) => `
    width: 95px;
    margin-top: 10px;
    margin-left: -40px;

    color: ${
      active
        ? customColor || stepper.label.color.active
        : stepper.label.color.inactive
    };

    font-size: ${stepper.label.font.size}px;
    text-align: center;
  `,
);

const Dots = ({ activeStep, labels, color }) => {
  return (
    <Wrapper>
      {labels.map((label, index) => (
        <DotWrapper key={label}>
          <Dot active={activeDot(index, activeStep)} color={color} />
          <Label active={activeDot(index, activeStep)} color={color}>
            {label}
          </Label>
        </DotWrapper>
      ))}
    </Wrapper>
  );
};

Dots.propTypes = {
  activeStep: number,
  labels: arrayOf(string),
  color: typeOf(colors),
};

Dots.defaultProps = {
  activeStep: 0,
  labels: [],
  color: undefined,
};

export default Dots;
